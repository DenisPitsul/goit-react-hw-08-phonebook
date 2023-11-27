import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <nav>
        <NavLink className={classes.link} to="/">
            Home
        </NavLink>
        {isLoggedIn && (
            <NavLink className={classes.link} to="/tasks">
                Tasks
            </NavLink>
        )}
        </nav>
    );
};

export default Navigation;