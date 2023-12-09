import axios from "axios";
import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export function ContextFunc({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products`)
            .then(data => setProducts(data.data))
    }, []);

    return (
        <Context.Provider value={{
            products,
        }}>
            {children}
        </Context.Provider>
    )
};