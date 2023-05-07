import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import css from './Navigation.module.css';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/Auth/authThunk';
import { selectUserName } from 'redux/Auth/authSelectors';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <p> Welcome, </p>
      <PersonOutlineIcon />
      <p>{name}! </p>
      <Button
        className={css.userMenuButton}
        variant="outlined"
        color="inherit"
        startIcon={<LogoutIcon />}
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </Button>
    </div>
  );
};
