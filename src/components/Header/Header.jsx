import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../context/CartContext";

const Header = () => {
    const { cart } = useContext(CartContext);
    return (
        <header className="pt-2">
            <div className="container-fluid">
                <div className="container-xl">
                    <div className="row header d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <div className="col-4 header__logo"><img src="" /></div>
                        <div className="col-4 header__search align-middle">
                            <form role="search" action="search" method="GET" className="input-group px-2 pe-lg-0" name="frmSearch" id="frmSearch">
                                <input className="form-control " type="search" name="txtKeyword" id="txtKeyword" placeholder="Tìm kiếm" />
                                <button className="btn btn-primary" type="submit"><FaSearch /></button>
                            </form>
                        </div>
                        <div className="col-4 text-end ">
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4 text-end d-flex flex-wrap align-items-center  justify-content-lg-end">
                                    <a href="/cart" className="position-relative fs-2 ">
                                        <FaShoppingCart />
                                        {/* {cart && cart.length > 0 &&
                                            <div className="position-absolute" >{cart.length}</div>
                                        } */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >

    );
}
export default Header;