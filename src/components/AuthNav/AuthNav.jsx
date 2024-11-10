import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
