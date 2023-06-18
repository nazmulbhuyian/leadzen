import React, { createContext, useState } from 'react';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const creatUser = (userName) =>{
        setUser(userName)
    }

    const info = {
        user,
        creatUser
    }
console.log(user)
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;