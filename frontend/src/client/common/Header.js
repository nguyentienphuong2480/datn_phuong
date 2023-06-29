import React from "react";
import { Link, useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.removeItem('accessToken')
        navigate('/')
    }
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
                            <Link to='/cart' className="nav-icon position-relative text-decoration-none">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                            </Link>
                            <Link className="nav-icon position-relative text-decoration-none dropdown">
                                <button className="dropbtn">
                                    <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                </button>
                                <div className="dropdown-content">
                                    {/* <Link>Tài khoản</Link> */}
                                    <Link to='/myorder'>Đơn hàng của tôi</Link>
                                </div>
                            </Link>
                            {
                                !localStorage.accessToken ? <Link to='/login' className="nav-icon position-relative text-decoration-none">Đăng nhập | Đăng ký</Link> :
                                    <Link onClick={Logout} className="nav-icon position-relative text-decoration-none">Đăng xuất</Link>
                            }

                        </div>
                    </div>

                </div >
            </nav >
        </div >
    )
}