import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const handelOnchange = (e, product) => {
        let soluong = parseInt(e.target.value);
        console.log(soluong);
        soluong = isNaN(soluong) || soluong === 0 ? 1 : soluong;
        const newCart = [...cart].map((item) => {
            if (item.id === product.id) {
                return { ...item, soluong: soluong }
            }
            else {
                return item;
            }
        })
        setcart(newCart);
    }
    // tang so luong 
    const handelPlus = (product) => {
        const newCart = [...cart].map((item) => {
            if (item.id === product.id) {
                return { ...item, soluong: item.soluong + 1 }
            }
            else {
                return item;
            }
        })
        setcart(newCart);
    }
    const handelMinus = (product) => {

        const newCart = [...cart].map((item, index) => {
            if (item.id === product.id) {
                if (item.soluong === 1) {
                    return null;
                }
                else {
                    return { ...item, soluong: item.soluong - 1 }
                }
            }
            else {
                return item;
            }
        }).filter((item) => item != null)
        setcart(newCart);
    }

    const handelDeleteAProduct = (product) => {
        const newCart = [...cart].filter((item) => item.id !== product.id);
        toast.success("Xóa sản phẩm thành công")
        setcart(newCart);
    }
    const removeCart = () => {
        // const confirmRemove = confirm("Bạn có muốn xóa giỏ hàng");
        // if (confirmRemove) {
        // toast.success("Xóa thành công");
        setcart([]);

        // }
    }
    const addToCart = (product) => {
        // check sản phẩm đã có trong cart chưa

        const checkID = cart.find((item) => {
            return item.id === product.id;
        })
        if (checkID) {
            const newCart = [...cart].map((item) => {
                if (item.id === product.id) {
                    return { ...item, soluong: item.soluong + 1 }
                }
                else {
                    return item;
                }
            })
            setcart(newCart)
        }
        else {
            const newItem = { ...product, soluong: 1 };
            setcart([...cart, newItem]);
        }

        toast.success("Đã thêm sản phẩm vào giỏ hàng")
        // console.log(checkID);
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    // console.log(cart);
    return (
        <CartContext.Provider value={{ addToCart, removeCart, handelDeleteAProduct, cart, handelMinus, handelPlus, handelOnchange }}>
            {children}
        </CartContext.Provider>
    )
}