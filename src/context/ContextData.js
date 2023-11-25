import React, { useState } from 'react'

export const ContextData = React.createContext();

function ContextFunc({ children }) {
    const [data, setData] = useState([
        {
            id: 1,
            username: "John",
            password: '12345',
            img: './img/',
        },
        {
            id: 2,
            username: "Michael",
            password: '232323',
            img: './img/',
        },
        {
            id: 3,
            username: "Bob",
            password: '114455',
            img: './img/',
        },
    ]);

    localStorage.setItem('users', JSON.stringify(data));

    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem('users')) || []
    );

    return (
        <ContextData.Provider value={{
            users,
            setUsers,
        }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunc;