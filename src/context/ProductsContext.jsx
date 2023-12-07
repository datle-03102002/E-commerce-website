import React, { createContext, useState } from "react";
import { useEffect } from "react";
export const ProductsContext = createContext();
export const ProductProvider = ({ children }) => {
    const [Products, setProducts] = useState([]);
    const [Filter, setProductsFilter] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            setProducts(data);
        }
        getProducts()
    }, [])
    // const ProductsFilter = (category) => {
    //     const list = Products.filter((item) => item.category.toLowerCase() == category.toLowerCase())
    //     setProductsFilter(list);
    // }
    // ProductsFilter();

    return (
        <ProductsContext.Provider value={Products}>
            {children}
        </ProductsContext.Provider>
    )
}