import { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ( {children} ) => {

    const apiUrl = process.env.REACT_APP_API_URL;

    const register = async (user) => {
        const response = await fetch(`${apiUrl}/user/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        console.log(data);
        return data;
    }

    const authenticate = async (user) => {
        const response = await fetch(`${apiUrl}/user/authenticate`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

        const data = await response.json();
        return data;
    }

    return(
        <UserContext.Provider value={{
            register: register,
            authenticate: authenticate,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;