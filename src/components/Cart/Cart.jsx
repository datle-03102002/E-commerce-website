import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProductsContext } from "../../context/ProductsContext";
import Header from "../Header/Header";
const Cart = () => {
    const { cart, removeCart, RemoveItemInCart, recrease,
        Increase, handelOnchange } = useContext(CartContext)
    const products = useContext(ProductsContext);
    const [isOpenModal, setIsOpenModal] = useState(false);
    console.log(products);
    const total = cart.reduce((tong, currenvalue) => {
        return tong + (currenvalue.price * currenvalue.soluong);
    }, 0);
    return (
        <>

            {cart && cart.length > 0 ?
                (
                    <div className="container mt-3">
                        { }
                        <Modal show={isOpenModal} onHide={() => setIsOpenModal(false)}>
                            <Modal.Header>
                                Thông báo
                            </Modal.Header>
                            <Modal.Body>
                                Bạn có muốn xóa toàn bộ sản phẩm không?
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn btn-danger" onClick={() => removeCart()}>
                                    Có
                                </button>
                                <button className="btn btn-secondary" onClick={() => setIsOpenModal(false)}>
                                    Cancel
                                </button>
                            </Modal.Footer>
                        </Modal>
                        <button type="button" className="btn btn-outline-danger d-flex align-middle align-items-center" onClick={() => setIsOpenModal(true)}>
                            <FaTrash className="mx-1" /> Xóa giỏ hàng
                        </button>
                        <table className="table" >
                            <thead>
                                <tr>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Số lượng </th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Tổng</th>
                                    <th scope="col">Thao tác</th>
                                </tr >
                            </thead>
                            <tbody>
                                {cart.map((item) => {
                                    return (
                                        <tr key={item.id} >
                                            <td>
                                                <a href={`product/${item.id}`}>
                                                    <img src={item.image} alt="" className="card-img-top w-100 card-image" style={{ maxHeight: "80px" }} />
                                                </a>
                                            </td>
                                            <td className="align-middle">{item.title}</td>
                                            <td className="align-middle">
                                                <div className="input-group" style={{ maxWidth: "100px", minWidth: "90px" }}>
                                                    <button type="button" className="btn btn-danger btn-number p-1" data-type="minus" onClick={() => recrease(item)}>
                                                        <FaMinus></FaMinus>
                                                    </button>
                                                    <input className="form-control input-number px-1 text-center" type="text" value={item.soluong} onChange={(e) => handelOnchange(e, item)}></input>
                                                    <button type="button" className="btn btn-success btn-number p-1" data-type="plus" onClick={() => Increase(item)}>
                                                        <FaPlus></FaPlus>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="align-middle">${item.price}</td>
                                            <td className="align-middle">${item.price * item.soluong}</td>
                                            <td className="align-middle">
                                                <button type="button" className="btn" onClick={() => RemoveItemInCart(item)}>
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        Tổng tiền:
                                    </td>
                                    <td>{total}</td>
                                </tr>
                            </tbody >
                            <ToastContainer autoClose={2000} pauseOnHover={false}></ToastContainer>
                        </table>

                        <div className="d-flex justify-content-end">
                            <Button className="mx-3 btn-danger" >
                                <a className="text-white text-decoration-none " href="/cart/checkout">
                                    Thanh toán
                                    {/* onClick={() => handelPayment()} */}
                                </a>
                            </Button>
                            <Button className="btn-danger" >
                                <a className="text-white text-decoration-none " href="/customer/order">
                                    Xem các đơn hàng đã mua
                                </a>
                            </Button>
                        </div>
                    </div>) : <p>Không có sản phẩm nào trong giỏ hàng</p>
            }
            <div className="container-xl pt-5 pb-5">
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

    );
}
export default Cart;