import { useContext } from "react";
import { Link } from "react-router-dom";


import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};


export const Login = () => {
    const {onLoginSubmit} = useContext(AuthContext);
    const {values, onChangeHandler, onSubmit} = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return(
        <div className="login-form">
            <form method="POST" onSubmit={onSubmit}>
                <h2 className="login-header">Login</h2>
                    <label htmlFor="email">Email:</label>
                      <input 
                        type="email" 
                        id="email" 
                        name={LoginFormKeys.Email}  
                        placeholder="alex@gmail.com"
                        value={values[LoginFormKeys.Email]}
                        onChange={onChangeHandler}
                      />
  
                      <label htmlFor="login-pass">Password:</label>
                      <input 
                        type="password" 
                        id="login-password" 
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={onChangeHandler}
                      />
                      <input type="submit" className="btn submit" value="Login"/>
                      <p className="field">
                          <span>If you don't have profile click <Link className="link" to="/users/register">here</Link></span>
                      </p>
            </form>
        </div>
    );
};