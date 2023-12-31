import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom"
import { ProductsContext } from "../../context/ProductsContext";
import "./ProductDetail.css";
import { FaCartPlus, FaStar } from "react-icons/fa";
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
                <div className="container-fluid px-2 px-lg-5 main ">
                    <div className="row gx-4 gx-lg-5  row-cols-md-1 row-cols-xl-2 mt-5">
                        <div className="col-md-6 col-lg-6 col-sm-12 left-side">
                            <img className="w-100" src={product.image} style={{ maxHeight: "500px" }} />
                        </div>
                        <div className="col-md-6 ml-3 col-lg-6 col-sm-12">
                            <div className="mb-3" >
                                <p className="text-uppercase text-infor">Category: {product.category}</p>

                                <div className="vertical-middle d-flex align-items-center ">
                                    {product.rating.rate} <FaStar className="mx-1" style={{ color: "yellow" }}></FaStar>
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
                                    <FaCartPlus className="mx-2" />
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer limit={3} autoClose={2000} pauseOnHover={false}></ToastContainer>
                </div>}
            <div className="container-xl pt-2">
                <div className="row pb-5">
                    <div className="col-lg-4 offset-4 text-center">
                        <h3 className="fw-bold text-uppercase text-success">Sản phẩm liên quan</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map((item) => {
                            return (
                                <div key={item.id} className="col-md-3 mb-5 shadow-sm">
                                    <div className="card h-100 overflow-hidden">
                                        <a href={`/product/${item.id}`} className="card-link glightbox">
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
                                    </div>
                                </div>
                            );
                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default ProductDetail;