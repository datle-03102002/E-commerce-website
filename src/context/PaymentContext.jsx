import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { CartContext } from "./CartContext";
export const PaymentContext = createContext();
export const PaymentProvider = ({ children }) => {
    const { cart, removeCart } = useContext(CartContext);
    const [payment, setPayment] = useState(JSON.parse(localStorage.getItem("payment")) || []);
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [address, setaddress] = useState("")
    const [diachi, setdiachi] = useState(false);
    const [isOpenModelDiaChi, setIsOpenModalDiaChi] = useState(false)
    const handelAddDiachi = () => {
        setdiachi({ name: name, phone: phone, address: address })
    }
    const handelPayment = () => {
        if (diachi === false) {
            setIsOpenModalDiaChi(true);
        }
        else {

            const id = payment.length;
            const newPayment = { id: id, donhang: [...cart], diachi: diachi };
            removeCart();
            setPayment([...payment, newPayment]);
        }
    }
    useEffect(() => {
        localStorage.setItem("Payment", JSON.stringify(payment));
    }, [payment])
    return (
        <PaymentContext.Provider value={{
            payment, handelPayment, setdiachi, isOpenModelDiaChi,
            setIsOpenModalDiaChi, handelAddDiachi, setphone, setname, setaddress
        }}>
            {children}
        </PaymentContext.Provider>
    )
}