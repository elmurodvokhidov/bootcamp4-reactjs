import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export function ContextFunc({ children }) {
    const [products, setProducts] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        fetch(`https://reqres.in/api/products?page=${pageNum}`)
            .then(foo => foo.json())
            .then(json => setProducts(json.data))
    }, [pageNum])

    return (
        <Context.Provider value={{
            products,
            setPageNum,
        }}>
            {children}
        </Context.Provider>
    )
};