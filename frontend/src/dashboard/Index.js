import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import DashboardRoute from '../route/DashboardRoute'
function Index() {
    const navigate = useNavigate()
    const LogOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('accessToken');
        navigate('/')
    }
    return (
        <div id='page-top'>
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">Dashboard</div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <li className="nav-item active">
                        <Link to='/dashboard' className="nav-link">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span>Trang chủ</span>
                            </Link>
                    </li>
                    <hr className="sidebar-divider" />
                    <div className="sidebar-heading">
                        Quản lý
                    </div>
                    <li className="nav-item">
                        <a href='#' className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog" />
                            <span>Quản lý sản phẩm</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link to='/dashboard/listProduct' className="collapse-item pl-0">Danh sách sản phẩm</Link>
                                <Link to='/dashboard/addProduct' className="collapse-item pl-0">Thêm sản phẩm</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href='#' className="nav-link collapsed" data-toggle="collapse" data-target="#brand" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog" />
                            <span>Quản lý thương hiệu</span>
                        </a>
                        <div id="brand" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link to='/dashboard/listBrand' className="collapse-item pl-0">Danh sách thương hiệu</Link>
                                <Link to='/dashboard/addBrand' className="collapse-item pl-0">Thêm thương hiệu</Link>
                                <Link to='/dashboard/trashBrand' className="collapse-item pl-0">Thùng rác</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href='#' className="nav-link collapsed" data-toggle="collapse" data-target="#order" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog" />
                            <span>Quản lý đơn hàng</span>
                        </a>
                        <div id="order" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link to='/dashboard/listOrder' className="collapse-item pl-0">Danh sách đơn hàng</Link>
                                {/* <Link to='/dashboard/addBrand' className="collapse-item pl-0">Thêm thương hiệu</Link>
                                <Link to='/dashboard/trashBrand' className="collapse-item pl-0">Thùng rác</Link> */}
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href='#' className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench" />
                            <span>Quản lý người dùng</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link to='/dashboard/listUser' className="collapse-item pl-0">Danh sách người dùng</Link>
                                <Link to='/dashboard/addUser' className="collapse-item pl-0">Thêm người dùng</Link>

                            </div>
                        </div>
                    </li>
                    <hr className="sidebar-divider" />

                </ul>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <ul className="navbar-nav ml-auto">
                                <div className="topbar-divider d-none d-sm-block" />
                                <li className="nav-item dropdown no-arrow">
                                    <Link onClick={e =>LogOut(e)} className='nav-link'>Logout<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" /></Link>
                                </li>
                            </ul>
                        </nav>
                        <DashboardRoute />
                    </div>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index