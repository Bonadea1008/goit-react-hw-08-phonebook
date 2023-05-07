import { Outlet } from 'react-router-dom';
import { AppBar } from '../Navigation/AppBar';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';
import { Loader } from '../Loader';

export const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <header className={css.header}>
          <AppBar />
        </header>
        <Suspense fallback={<Loader />}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </div>
    </>
  );
};
