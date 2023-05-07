import { Outlet } from 'react-router-dom';
import { AppBar } from '../Navigation/AppBar';
import css from './SharedLayout.module.css';
// import { Loader } from './Loader';

export const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <header className={css.header}>
          <AppBar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
