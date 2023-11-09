import React, { useContext } from "react";
import { PaymentContext } from "../../context/PaymentContext";
const CheckOut = () => {
    const { handelPayment, isOpenModalAddress, setIsOpenModalAddress,
        handelAddDiachi, setphone, setname, setaddress } = useContext(PaymentContext);
    return (
        <form>
            <label>Thông tin giao hàng</label>
            <label>Họ tên</label>
            <input className="form-control" required></input>
            <label>Số điện thoại</label>
            <input className="form-control" required></input>
            <label>Địa chỉ</label>
            <input className="form-control" required></input>
        </form>
        // <Modal show={isOpenModalAddress} onHide={() => setIsOpenModalAddress(false)}>
        //     <Modal.Header>Vui lòng nhập địa chỉ</Modal.Header>
        //     <Modal.Body>
        //         Họ tên: <input className="form-control mr-sm-2" type="text" name="name" onChange={(e) => setname(e.target.value)} />
        //         Số điện thoại: <input className="form-control mr-sm-2" type="text" name="phone" onChange={(e) => setphone(e.target.value)}></input>
        //         Địa chỉ: <input className="form-control mr-sm-2" type="text" name="address" onChange={(e) => setaddress(e.target.value)}></input>
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <button className="btn btn-primary" onClick={() => {
        //             handelAddDiachi();
        //             setIsOpenModalAddress(false);
        //         }}>
        //             Ok
        //         </button>
        //         <button className="btn btn-secondary" onClick={() => setIsOpenModalAddress(false)}>
        //             Cancel
        //         </button>
        //     </Modal.Footer>
        // </Modal>
    )
}
export default CheckOut;