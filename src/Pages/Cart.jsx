import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PaymentContext } from "../context/PaymentContext";

const Cart = () => {
    const { cart, removeCart, handelDeleteAProduct, handelPlus,
        handelMinus, handelOnchange } = useContext(CartContext);

    const { handelPayment, isOpenModelDiaChi, setIsOpenModalDiaChi,
        handelAddDiachi, setphone, setname, setaddress } = useContext(PaymentContext);

    const [isOpenModal, setIsOpenModal] = useState(false);

    const total = cart.reduce((tong, currenvalue) => {
        return tong + (currenvalue.price * currenvalue.soluong);
    }, 0);


    return (

        cart && cart.length > 0 ?

            (
                <div className="container mt-3">
                    <Modal show={isOpenModal} onHide={() => setIsOpenModal(false)}>
                        <Modal.Header>
                            Thông báo
                        </Modal.Header>
                        <Modal.Body>
                            Bạn có muốn xóa toàn bộ sản phẩm không?
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-primary" onClick={() => removeCart()}>
                                Có
                            </button>
                            <button className="btn btn-secondary" onClick={() => setIsOpenModal(false)}>
                                Cancel
                            </button>
                        </Modal.Footer>
                    </Modal>
                    <button type="button" className="btn btn-outline-dark d-flex align-middle align-items-center" onClick={() => setIsOpenModal(true)}>
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
                                    <tr >
                                        <td>
                                            <a href={`product/${item.id}`}>
                                                <img src={item.image} alt="" className="card-img-top w-100 card-image" style={{ maxHeight: "80px" }} />
                                            </a>
                                        </td>
                                        <td className="align-middle">{item.title}</td>
                                        <td className="align-middle">
                                            <div className="input-group" style={{ maxWidth: "100px", minWidth: "90px" }}>
                                                <button type="button" class="btn btn-danger btn-number p-1" data-type="minus" onClick={() => handelMinus(item)}>
                                                    <FaMinus></FaMinus>
                                                </button>
                                                <input className="form-control input-number px-1 text-center" type="text" value={item.soluong} onChange={(e) => handelOnchange(e, item)}></input>
                                                <button type="button" class="btn btn-success btn-number p-1" data-type="plus" onClick={() => handelPlus(item)}>
                                                    <FaPlus></FaPlus>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-middle">${item.price}</td>
                                        <td className="align-middle">${item.price * item.soluong}</td>
                                        <td className="align-middle">
                                            <button type="button" className="btn" onClick={() => handelDeleteAProduct(item)}>
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
                    <Modal show={isOpenModelDiaChi} onHide={() => setIsOpenModalDiaChi(false)}>
                        <Modal.Header>Vui lòng nhập địa chỉ</Modal.Header>
                        <Modal.Body>
                            Họ tên: <input className="form-control mr-sm-2" type="text" name="name" onChange={(e) => setname(e.target.value)} />
                            Số điện thoại: <input className="form-control mr-sm-2" type="text" name="phone" onChange={(e) => setphone(e.target.value)}></input>
                            Địa chỉ: <input className="form-control mr-sm-2" type="text" name="address" onChange={(e) => setaddress(e.target.value)}></input>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-primary" onClick={() => {
                                handelAddDiachi();
                                setIsOpenModalDiaChi(false);
                            }}>
                                Ok
                            </button>
                            <button className="btn btn-secondary" onClick={() => setIsOpenModalDiaChi(false)}>
                                Cancel
                            </button>
                        </Modal.Footer>
                    </Modal>
                    <Button onClick={() => handelPayment()}>Thanh toán</Button>
                </div>) : <p>Không có sản phẩm nào trong giỏ hàng</p>

    );
}
export default Cart;