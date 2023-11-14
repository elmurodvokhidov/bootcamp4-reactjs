import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ContextData = React.createContext();

function ContextFunction({ children }) {
    const addInfo = useNavigate();
    // Barcha ma'lumotlar
    const [info, setInfo] = useState([
        {
            id: 1,
            img: "./img/s1.png",
            title: "Fresh organic apricot",
            price: 15,
            count: 0,
        },
        {
            id: 2,
            img: "./img/c2.png",
            title: "Cucumber",
            price: 105,
            count: 0,
        },
        {
            id: 3,
            img: "./img/h1.png",
            title: "Hazelnuts filbert nut",
            price: 51,
            count: 0,
        },
    ]);

    function addFun() {
        addInfo('addinfo')
    };

    return (
        <ContextData.Provider value={{
            info,
            addFun
        }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextFunction