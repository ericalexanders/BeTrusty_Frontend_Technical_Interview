import api from './api';

export const getToken = async () => {
  const response = await api.post('/api/v2/auth/login', {
    email: process.env.NEXT_PUBLIC_AUTH_USER,
    password: process.env.NEXT_PUBLIC_AUTH_PASS,
  });
  return response.data.access_token;
};

export const autoConnectSession = async () => {
  const authToken = getLocalStorage('auth_token');
  if (!authToken) {
    await disconnectSession();
  } else {
    const response = await api.post('/api/v2/auth/refresh');
    return response.data;
  }
};

export const disconnectSession = async () => {
  removeLocalStorage('auth_token');
  removeLocalStorage('auth');
  await getToken();
  return router.push({ pathname: '/login', query: { redirect: router.asPath } });
};
