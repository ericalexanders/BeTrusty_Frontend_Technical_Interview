import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SessionContext } from './SessionContext';
import Header from './Header';
import Footer from './Footer';
import { getLocalStorage } from './localStorageUtils';
import { autoConnectSession, disconnectSession, getToken } from './services/authService';
import { updateCurrency, setCurrency } from './services/currencyService';

const Layout = ({ children }) => {
  const [userSession, setUserSession] = useState(null);
  const [products, setProducts] = useState(undefined);
  const [homeData, setHomeData] = useState(undefined);
  const actualCurrency = getLocalStorage('currency');
  const router = useRouter();

  useEffect(() => {
    const initSession = async () => {
      const authToken = getLocalStorage('auth_token');
      if (authToken && !userSession) {
        await autoConnectSession(true);
        actualCurrency && await setCurrency(actualCurrency.id, authToken, true);
      } else {
        const auth = getLocalStorage('auth');
        await autoConnectSession();
        actualCurrency && await setCurrency(actualCurrency.id, auth, false);
      }
      actualCurrency && await updateCurrency(actualCurrency.id);
    };
    initSession();
  }, []);

  useEffect(() => {
    if (userSession && userSession.language && userSession.language.code !== router.locale) {
      router.push(router.pathname, router.asPath, { locale: userSession.language.code });
    }
    userSession && userSession.country_payment?.code === null && getGeoInfo();
  }, [userSession]);

  useEffect(() => {
    const fetchData = async () => {
      const auth = getLocalStorage('auth');
      if (auth) {
        await getHomeData();
        await getProducts();
      } else {
        await getToken();
      }
    };
    fetchData();
  }, [auth]);

  const providerValue = {
    session: userSession,
    setSession: setUserSession,
    access_token: auth,
    winProducts: products,
    disconnectUser: disconnectSession,
    refreshSession: autoConnectSession,
    homeData: homeData,
    winBrokers: undefined
  };

  return (
    <SessionContext.Provider value={providerValue}>
      <Header />
      <main>{children}</main>
      <Footer />
    </SessionContext.Provider>
  );
};

export default Layout;
