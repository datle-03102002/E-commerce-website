import React, { createContext, useState } from "react";
import { useEffect } from "react";
export const ProductsContext = createContext();
export const ProductProvider = ({ children }) => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            setProducts(data);
        }
        getProducts()
    }, [])

    return (
        <ProductsContext.Provider value={Products}>
            {children}
        </ProductsContext.Provider>
    )
}