import { createAsyncThunk } from '@reduxjs/toolkit';
import { register, login, logout } from '../../components/services/authAPI';
import { setAuthHeader } from '../../components/services/authAPI';
import { Notify } from 'notiflix';
import axios from 'axios';

export const registerThunk = createAsyncThunk('auth/register', credentials =>
  register(credentials)
);

export const loginThunk = createAsyncThunk('auth/login', credentials =>
  login(credentials)
);

export const logoutThunk = createAsyncThunk('auth/logout', () => logout());

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    setAuthHeader(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      Notify.failure('Something went wrong. Try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
