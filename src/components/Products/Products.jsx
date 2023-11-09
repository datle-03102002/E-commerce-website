import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import "./Products.css"
import { CartContext } from "../../context/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Products = () => {
    const products = useContext(ProductsContext)
    const { addToCart } = useContext(CartContext)
    return (
        <>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center pt-5" style={{ background: "linear-gradient(to right, #a8ff78, #78ffd6)" }}>
                    {products.map((item) => {
                        return (
                            <div className="col mb-5 shadow-sm">
                                <div className="card h-100 overflow-hidden">
                                    <a href={`/product/${item.id}`} className="card-link">
                                        <img src={item.image} alt="" className="card-img-top w-100 card-image" style={{ height: "200px" }} />
                                    </a>
                                    <div className="card-body p-1 text-center " style={{ height: "120px" }}>
                                        <div className="card-title product-name fw-bold">
                                            {item.title}
                                        </div>
                                        <div className="card-text d-flex flex-column justify-content-around ">
                                            <div className="text-danger fw-bold">${item.price}</div>
                                            <div>
                                                {item.rating.rate}/5 &nbsp;
                                                ({item.rating.count} Ratings)
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                                        <button className="btn btn-outline-dark btn-addToCart" onClick={() => addToCart(item)}>
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div >
                <ToastContainer limit={3} autoClose={2000} pauseOnHover={false}></ToastContainer>
            </div >
        </>
    )
}
export default Products;