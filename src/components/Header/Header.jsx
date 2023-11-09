import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <ul className="nav align-items-center justify-content-between">
            <div className="d-flex">
                <li className="nav-item m-1">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item m-1">
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li className="nav-item m-1">
                    <NavLink to="/Login">Login</NavLink>
                </li>
            </div>
            <form className="form-inline d-flex my-2 my-lg-0 w-50">
                <input className="form-control mr-sm-2 input-search" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0 mx-3 btn-submit" type="submit">Search</button>
                <NavLink className="btn-cart" to="/Cart">Cart</NavLink>
            </form>

        </ul>
    );
}
export default Header;