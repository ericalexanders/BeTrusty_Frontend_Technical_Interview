import api from './api';
import { getLocalStorage, setLocalStorage } from './localStorageUtils';

export const updateCurrency = async (currencyId) => {
  const actualCurrency = getLocalStorage('currency');
  const response = await api.get(`/api/v2/currencies/${currencyId}`);
  const updatedCurrency = response.data;
  if (actualCurrency.value !== updatedCurrency.value) {
    const newCurrency = { ...actualCurrency, value: updatedCurrency.value };
    setLocalStorage('currency', newCurrency);
  }
};

export const setCurrency = async (currencyId, token, session) => {
  const response = await api.post('/api/v2/currencies/set', { currency: currencyId });
  const setCurrencyData = response.data;
  if (session) {
    setLocalStorage('auth_token', setCurrencyData.access_token);
  }
};
