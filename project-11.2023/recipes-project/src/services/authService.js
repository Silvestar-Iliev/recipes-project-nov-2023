import * as request from "./requester";

const url = 'http://localhost:3030/users';

export const login = (loginData) => request.post(`${url}/login`, loginData);

export const register = (registerData) => request.post(`${url}/register`, registerData);

export const logout = (token) =>  {
   const response = fetch(`${url}/logout`, {
        headers: {
            'X-Authorization': token,
        }
   });
   return response;
}
