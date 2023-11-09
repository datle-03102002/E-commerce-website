import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom"
import { ProductsContext } from "../../context/ProductsContext";
import "./ProductDetail.css";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Products.css"
const ProductDetail = () => {
    //lay id cua san pham can xem
    const { id } = useParams();
    const products = useContext(ProductsContext)
    const product = products.find((item) => item.id === parseInt(id));
    const { addToCart } = useContext(CartContext);
    const productsByCategory = products.filter((item) => item.category === product.category).filter((item) => item.id !== parseInt(id))
    console.log(productsByCategory);
    return (
        <>

            {products && products.length > 0 &&
                <div className="container-fluid px-4 px-lg-5 main ">
                    <div className="row gx-4 gx-lg-5  row-cols-md-1 row-cols-xl-2 mt-5">
                        <div className="col-md-6 col-lg-6 col-sm-12 left-side">
                            <img className="w-100" src={product.image} style={{ maxHeight: "500px" }} />
                        </div>
                        <div className="col-md-6 ml-3 col-lg-6 col-sm-12">
                            <div className="mb-3" >
                                <p className="text-uppercase text-infor">Category: {product.category}</p>

                                <div className="vertical-middle d-flex align-items-center ">
                                    {product.rating.rate} <FaStar className="mx-1" style={{ color: "yellow" }}></FaStar>
                                    <FaStar style={{ color: "yellow" }}></FaStar>
                                    <FaStar className="mx-1" style={{ color: "yellow" }}></FaStar>
                                    <FaStar style={{ color: "yellow" }}></FaStar>
                                    <FaStar className="mx-1 mr-3" style={{ color: "yellow" }}></FaStar>
                                    {product.rating.count} rates
                                </div>
                            </div>
                            <div className="mb-3">
                                <h2>{product.title}</h2>
                            </div>
                            <div className="fw-bold fx-20 mb-3">
                                ${product.price}
                            </div>

                            <div className="mb-3">
                                <p>Description:
                                    <br />
                                    {product.description}
                                </p>
                            </div>
                            <div className="d-flex algin-item-center justify-content-center">
                                <button className="btn btn-outline-dark" onClick={() => addToCart(product)}>
                                    <FaShoppingCart className="mx-2" />
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer limit={3} autoClose={2000} pauseOnHover={false}></ToastContainer>
                </div>}
            <div className="container ">
                <div className="row row-cols-4 mt-5">
                    {productsByCategory.map((item) => {
                        return (
                            <div className="col card-productByCategory mb-5" style={{ height: "300px" }}>
                                <a href={`${item.id}`} className="text-decoration-none">
                                    <div className="card h-100 text-center overflow-hidden" style={{ borderRadius: "0" }}>
                                        <div className="card-img-top card-image" >
                                            <img style={{ height: "200px", width: "100%" }} className="" src={item.image} />
                                        </div>
                                        <div className="card-body">
                                            <div className="card-title product-name">
                                                {item.title}
                                            </div>
                                            <div className="card-infor">
                                                ${item.price}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        </>
    )
}
export default ProductDetail;