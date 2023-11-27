import styles from './Register.module.css';
import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContainer } from '../common/ErrorContainer/ErrorContainer';


export const Register = () => {
    const {onRegisterSubmit} = useContext(AuthContext);
    const {values, onChangeHandler, onSubmit, errorMessage} = useForm({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <>
        {errorMessage && <ErrorContainer error={errorMessage} />}
        <div className={styles["register-form"]}>
            <form method="POST" onSubmit={onSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="alex@email.com"
                    value={values.email}
                    onChange={onChangeHandler}
                />

                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Alex Petrov"
                    value={values.username}
                    onChange={onChangeHandler}
                />  

                <label htmlFor="pass">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="register-password"
                    value={values.password}
                    onChange={onChangeHandler}
                />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    id="confirm-password"
                    value={values.confirmPassword}
                    onChange={onChangeHandler}
                />

                <input className={styles["btn submit"]} type="submit" value="Register"/>

                <p className={styles["field"]}>
                    <span>If you already have profile click <Link className={styles["link"]} to="/users/login">here</Link></span>
                </p>
            </form>
        </div>
        </>
        
    );
};