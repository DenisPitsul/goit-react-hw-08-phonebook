import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import classes from './UserMenu.module.css';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    return (
        <div className={classes.wrapper}>
            <p className={classes.username}>Welcome, {user.name}</p>
            <button className={classes.logoutBtn} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};

export default UserMenu;
