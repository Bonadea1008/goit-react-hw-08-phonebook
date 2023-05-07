import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
} from './authThunk';
import { initialAuthState } from './initialAuthState';
import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.error = payload.error;
  state.isLoading = false;
};

const handleFulfilledRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleFulfilledLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoading = false;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = null;
};

const handleFulfilledRefreshUser = (state, { payload }) => {
  state.user = payload;
  state.isRefreshing = false;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, handleFulfilledRegister)
      .addCase(registerThunk.rejected, handleRejected)
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, handleFulfilledLogout)
      .addCase(logoutThunk.rejected, handleRejected)
      .addCase(refreshUserThunk.pending, handlePending)
      .addCase(refreshUserThunk.fulfilled, handleFulfilledRefreshUser)
      .addCase(refreshUserThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
