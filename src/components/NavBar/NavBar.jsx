import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import "./NavBar.css";
const NavBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Lỗi khi lấy danh mục:', error);
            }
        };

        fetchCategory();
    }, []);

    console.log(categories);
    // fetchCategory();
    // console.log(categories);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light text-light" aria-label="">
                <div className="container-xl">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobile" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mobile">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <a className="nav-link active" href="/">Trang chủ
                                    <div className="line"></div>
                                </a>

                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link " to="/electronics">Electronics
                                    <div className="line"></div>
                                </NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link " to="/jewelery">Jewelery

                                    <div className="line"></div>
                                </NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link " to="/men-clothing">Men's- clothing
                                    <div className="line"></div>
                                </NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link " to="/woman-clothing">Woman's- clothing
                                    <div className="line"></div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav >

        </>
    )
}
export default NavBar;