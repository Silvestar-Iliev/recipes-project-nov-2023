import styles from './Login.module.css';
import { useContext } from "react";
import { Link } from "react-router-dom";


import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { ErrorContainer } from '../common/ErrorContainer/ErrorContainer';


export const Login = () => {
    const {onLoginSubmit} = useContext(AuthContext);
    const {values, onChangeHandler, onSubmit, errorMessage} = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return(
        <>
        {errorMessage && <ErrorContainer error={errorMessage} />}
        <div className={styles["login-form"]}>
            <form method="POST" onSubmit={onSubmit}>
                <h2 className={styles["login-header"]}>Login</h2>
                    <label htmlFor="email">Email:</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"  
                        placeholder="alex@gmail.com"
                        value={values.email}
                        onChange={onChangeHandler}
                      />
  
                      <label htmlFor="login-pass">Password:</label>
                      <input 
                        type="password" 
                        id="login-password" 
                        name="password"
                        value={values.password}
                        onChange={onChangeHandler}
                      />
                      <input type="submit" className={styles["btn submit"]} value="Login"/>
                      <p className={styles["field"]}>
                          <span>If you don't have profile click <Link className={styles["link"]} to="/users/register">here</Link></span>
                      </p>
            </form>
        </div>
        </>
    );
};