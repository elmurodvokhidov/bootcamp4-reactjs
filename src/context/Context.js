import React, { useState } from "react";

export const Context = React.createContext();

export function ContextFunc({ children }) {
    const [products, setProducts] = useState([
        {
            id: '1',
            img: './img/tel4.jpg',
            pro_name: 'iPhone 15 Pro',
            pro_about: 'crazy phone',
            price: 800,
            category: 'phone',
            discount: 5,
            stock: true
        },
        {
            id: '2',
            img: './img/tv2.jpg',
            pro_name: 'Samsung Tv',
            pro_about: 'crazy phone',
            price: 800,
            category: 'tv',
            discount: 5,
            stock: false
        },
        {
            id: '3',
            img: './img/nout3.jpg',
            pro_name: 'MacBook Pro M2',
            pro_about: 'crazy phone',
            price: 800,
            category: 'laptop',
            discount: 5,
            stock: true
        },
        {
            id: '4',
            img: './img/tv1.jpg',
            pro_name: 'Toshiba Tv',
            pro_about: 'crazy phone',
            price: 800,
            category: 'tv',
            discount: 5,
            stock: true
        },
        {
            id: '5',
            img: './img/tel3.jpg',
            pro_name: 'Samsung Phone',
            pro_about: 'crazy phone',
            price: 800,
            category: 'phone',
            discount: 5,
            stock: false
        },
    ]);

    const [category, setCategory] = useState("");

    return (
        <Context.Provider value={{
            products,
            category,
            setCategory,
        }}>
            {children}
        </Context.Provider>
    )
};