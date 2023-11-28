import React, { useState } from 'react'

export const ContextData = React.createContext();

function ContextFunc({ children }) {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem('users')) || []
    );

    const [input, setInput] = useState({
        username: '',
        password: '',
        img: '',
        id: '',
    });

    function inputFunc(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    function getImage(e) {
        setInput({
            ...input,
            img: URL.createObjectURL(e.target.files[0])
        });
    };

    function addFunction() {
        if (localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([
                ...JSON.parse(localStorage.getItem('users')), { ...input, id: new Date().getTime() }
            ]))
        }
        else {
            localStorage.setItem('users', JSON.stringify([{ ...input, id: new Date().getTime() }]))
        }
    }

    return (
        <ContextData.Provider value={{
            users,
            setUsers,
            inputFunc,
            getImage,
            addFunction,
        }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunc;