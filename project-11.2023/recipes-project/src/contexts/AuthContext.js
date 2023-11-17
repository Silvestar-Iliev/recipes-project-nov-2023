import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const navigate = useNavigate();

    const onRegisterSubmit = async(data) => {

        if (data.confirmPassword !== data.password) {
            return alert("Passwords dont't match.")
        }

        try {
            const result = await authService.register(data);
            
            setAuth(result);      
            navigate('/recipes');

        } catch (error) {
            console.log(error);
        };
    };

    
    const onLoginSubmit = async(data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);      
            navigate('/recipes');

        } catch (error) {
            console.log(error);
        };

    };

    const onLogout = async() => {
        await authService.logout(auth.accessToken);

        setAuth({});
        navigate('/');
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        userEmail: auth.email,
        token: auth.accessToken,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
    }

    return(
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    )

};


