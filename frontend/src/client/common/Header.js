import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
                        Zay
                    </Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Trang chủ</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="about.html">About</a>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">Sản phẩm</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <Link className="nav-icon d-none d-lg-inline" data-bs-toggle="modal" data-bs-target="#search">
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </Link>
                            <a className="nav-icon position-relative text-decoration-none" href="/">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span> */}
                            </a>
                            <a className="nav-icon position-relative text-decoration-none" href="/">
                                <div className="dropdown">
                                    <i className="fa fa-fw fa-user text-dark mr-3 dropbtn"></i>
                                    <div className="dropdown-content">
                                        <Link>Tài khoản</Link>
                                        <Link>Đơn hàng</Link>
                                        <Link to='/login'>Đăng nhập</Link>
                                    </div>
                                </div>
                                {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span> */}
                            </a>
                        </div>
                    </div>

                </div >
            </nav >
        </div >
    )
}