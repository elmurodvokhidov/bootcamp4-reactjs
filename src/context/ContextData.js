import React, { useState } from 'react';

export const ContextData = React.createContext();

function ContextFunction({ children }) {
    const [user, setUser] = useState('elmurod');

    function clickBtn() {
        setUser('bootcamp4')
    };

    return (
        <ContextData.Provider value={{ user, setUser, clickBtn }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunction;