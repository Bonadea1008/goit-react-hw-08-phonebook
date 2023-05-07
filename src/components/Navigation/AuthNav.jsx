import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const AuthNav = () => {
  return (
    <nav className={css.authNavList}>
       <NavLink className={css.navLink} to="/register">
          Register
        </NavLink>
           <NavLink className={css.navLink} to="/login">
          Log in
        </NavLink>
         </nav>
  );
};
