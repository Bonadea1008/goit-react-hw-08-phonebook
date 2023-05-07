import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUserThunk } from 'redux/Auth/authThunk';
import { selectIsRefreshing } from 'redux/Auth/authSelectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('./Pages/HomePage'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
