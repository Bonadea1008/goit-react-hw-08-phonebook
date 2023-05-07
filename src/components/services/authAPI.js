import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = async credentials => {
  try {
    const { data } = await axios.post('users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const logout = async () => {
  try {
    await axios.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    return Promise.reject(error.message);
  }
};
