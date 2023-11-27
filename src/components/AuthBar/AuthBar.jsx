import { NavLink } from 'react-router-dom';
import classes from './AuthBar.module.css';

const AuthNav = () => {
  return (
        <div>
            <NavLink className={classes.link} to="/register">
                Register
            </NavLink>
            <NavLink className={classes.link} to="/login">
                Log In
            </NavLink>
        </div>
  );
};

export default AuthNav;