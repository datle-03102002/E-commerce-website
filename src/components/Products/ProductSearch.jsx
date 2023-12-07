import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom"
import { ProductsContext } from "../../context/ProductsContext";
import "./ProductDetail.css";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ProductSearch = () => {
    //lay id cua san pham can xem
    let keyword = (new URLSearchParams(window.location.search)).get("txtKeyword")
    // const { keyword } = useParams();
    const products = useContext(ProductsContext)
    const product = products.find((item) => item.title.toUpperCase().includes(keyword));
    console.log(keyword);
    return (
        <>
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
export default ProductSearch;