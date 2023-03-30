import React, { createContext, useState } from 'react';


export const AuthContext = createContext();

const Context = ({children}) => {
    const [userEmail, setUserEmail] = useState("");
    const email = "foo";
    const password = "bar";

    const auth = {
        email,
        password,
        userEmail,
        setUserEmail
    }
    return (
        <div>
            <AuthContext.Provider value={auth}>
                    {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;