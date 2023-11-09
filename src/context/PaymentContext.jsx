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
    const [ListAddress, setListAddress] = useState([]);
    const [isOpenModalAddress, setIsOpenModalAddress] = useState(ListAddress.length == 0 ? true : false)
    const handelAddDiachi = () => {
        let newAddress = {}
        if (ListAddress.length == 0) {
            newAddress = { name: name, phone: phone, address: address, active: true }
        }
        else {
            newAddress = { name: name, phone: phone, address: address, active: false }
        }
        setListAddress([...ListAddress, newAddress]);
    }
    const handelPayment = () => {
        if (ListAddress.length == 0) {
            setIsOpenModalAddress(true);
        }
        else {
            const orderdate = new Date().toLocaleString;
            const address = ListAddress.find((item) => item.active == true);
            const id = payment.length;
            const newPayment = { id: id, donhang: [...cart], address: address, orderDate: orderdate };
            removeCart();
            setPayment([...payment, newPayment]);
        }
    }
    useEffect(() => {
        localStorage.setItem("Payment", JSON.stringify(payment));
    }, [payment])
    return (
        <PaymentContext.Provider value={{
            payment, handelPayment, isOpenModalAddress,
            setIsOpenModalAddress, handelAddDiachi, setphone, setname, setaddress
        }}>
            {children}
        </PaymentContext.Provider>
    )
}