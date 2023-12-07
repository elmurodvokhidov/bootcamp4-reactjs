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
            discount: 25,
        },
        {
            id: 2,
            img: "./img/c2.png",
            title: "Cucumber",
            price: 105,
            count: 0,
            discount: 25,
        },
        {
            id: 3,
            img: "./img/h1.png",
            title: "Hazelnuts filbert nut",
            price: 51,
            count: 0,
            discount: 25,
        },
        {
            id: 4,
            img: "./img/s1.png",
            title: "Fresh organic apricot",
            price: 20,
            count: 0,
            discount: 25,
        },
    ]);

    const [input, setInput] = useState({
        id: '',
        title: '',
        price: 0,
        count: 0,
        discount: 15,
    });

    const [like, setLike] = useState([]);

    function addFun() {
        addInfo('addinfo')
    };

    function increment(item) {
        setInfo(info.map(element => (
            element.id === item.id ? { ...element, count: element.count + 1 } : element
        )))
    };

    function decrement(item) {
        setInfo(info.map(element => (
            element.id === item.id && element.count > 0 ? { ...element, count: element.count - 1 } : element
        )))
    };

    function likeFun(item) {
        if (like.filter(element => element.id === item.id).length === 0) {
            // Agar like-da ma'lumot bo'lsa
            if (like) {
                setLike([...like, item])
            }
            // Agar like-da ma'lumot yo'q bo'lsa
            else {
                setLike([item])
            }
        }
        else {
            setLike(like.filter(element => element.id !== item.id))
        }
    };

    function inputFun(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    function addFunction() {
        setInfo([...info, {...input, id: new Date().getTime()}])
    };

    return (
        <ContextData.Provider value={{
            info,
            addFun,
            increment,
            decrement,
            like,
            likeFun,
            inputFun,
            addFunction
        }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextFunction