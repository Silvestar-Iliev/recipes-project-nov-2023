import styles from './Header.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';


export const Header = () => {
    const {isAuthenticated, userEmail} = useContext(AuthContext);

    return (
        <header className={styles["header"]}>
        <nav className={styles["navigation"]}>
            <ul>
                <Link className={styles["header-nav-li"]} to="/">Home</Link>
                <Link className={styles["header-nav-li"]} to="/recipes">All recipes</Link>
            {/* <!-- Logged-in users --> */}
            {isAuthenticated && (
                <>
                <Link className={styles["header-nav-li"]} to="/recipes/create-recipe">Create recipe</Link>
                <Link className={styles["header-nav-li"]} to="/users/profile">{userEmail}</Link>
                <Link className={styles["header-nav-li"]} to="/users/logout">Logout</Link>                      
                </>
            )}
            {/* <!-- Guest users --> */}
            {!isAuthenticated && (
                <>
                <Link className={styles["header-nav-li"]} to="/users/login">Login</Link>
                <Link className={styles["header-nav-li"]} to="/users/register">Register</Link>
                </>                
            )}
            </ul>
        </nav>
    </header>
    );
};