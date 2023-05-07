import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContacts = async () => {
  try {
    const response = await axios.get('/contacts');

    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createContacts = async data => {
  try {
    const response = await axios.post('/contacts', data);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteContacts = async id => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
