import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import DashboardRoute from '../route/DashboardRoute'
function Index() {
    const navigate = useNavigate()
    const LogOut = () => {
        localStorage.removeItem('accessToken');
        navigate('/')
    }
    return (
        // <div id='page-top'>
        //     <div id="wrapper">
        //         <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        //             <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        //                 <div className="sidebar-brand-icon rotate-n-15">
        //                     <i className="fas fa-laugh-wink" />
        //                 </div>
        //                 <div className="sidebar-brand-text mx-3">Dashboard</div>
        //             </a>
        //             <hr className="sidebar-divider my-0" />
        //             <li className="nav-item active">
        //                 <Link to='/dashboard' className="nav-link">
        //                     <i className="fas fa-fw fa-tachometer-alt" />
        //                     <span>Trang chủ</span>
        //                 </Link>
        //             </li>
        //             <hr className="sidebar-divider" />
        //             <div className="sidebar-heading">
        //                 Quản lý
        //             </div>
        //             {/* <li className="nav-item">
        //                 <Link to='#' className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        //                     <i className="fas fa-fw fa-cog" />
        //                     <span>Quản lý sản phẩm</span>
        //                 </Link>
        //                 <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        //                     <div className="bg-white py-2 collapse-inner rounded">
        //                         <Link to='/dashboard/listProduct' className="collapse-item p-0 my-1">Danh sách sản phẩm</Link>
        //                         <Link to='dashboard/addProduct' className="collapse-item p-0 my-1">Thêm sản phẩm</Link>
        //                     </div>
        //                 </div>
        //             </li> */}
        //             <li className="nav-item">
        //                 <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        //                     <i className="fas fa-fw fa-cog" />
        //                     <span>Components</span>
        //                 </a>
        //                 <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        //                     <div className="bg-white py-2 collapse-inner rounded">
        //                         <h6 className="collapse-header">Custom Components:</h6>
        //                         <a className="collapse-item" href="buttons.html">Buttons</a>
        //                         <a className="collapse-item" href="cards.html">Cards</a>
        //                     </div>
        //                 </div>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        //                     <i className="fas fa-fw fa-cog" />
        //                     <span>Components</span>
        //                 </a>
        //                 <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        //                     <div className="bg-white py-2 collapse-inner rounded">
        //                         <h6 className="collapse-header">Custom Components:</h6>
        //                         <a className="collapse-item" href="buttons.html">Buttons</a>
        //                         <a className="collapse-item" href="cards.html">Cards</a>
        //                     </div>
        //                 </div>
        //             </li>
        //             {/* <li className="nav-item">
        //                 <Link to='#' className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        //                     <i className="fas fa-fw fa-cog" />
        //                     <span>Quản lý người dùng</span>
        //                 </Link>
        //                 <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        //                     <div className="bg-white py-2 collapse-inner rounded">
        //                         <Link to='/dashboard/listUser' className="collapse-item p-0 my-1">Danh sách người dùng</Link>
        //                         <Link to='dashboard/addUser' className="collapse-item p-0 my-1">Thêm người dùng</Link>
        //                     </div>
        //                 </div>
        //             </li> */}
        //             <hr className="sidebar-divider" />
        //         </ul>
        //         <div id="content-wrapper" className="d-flex flex-column">
        //             <div id="content">
        //                 <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        //                     <ul className="navbar-nav ml-auto">
        //                         <li className="nav-item dropdown no-arrow d-sm-none">
        //                             <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                                 <i className="fas fa-search fa-fw" />
        //                             </a>
        //                             <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
        //                                 <form className="form-inline mr-auto w-100 navbar-search">
        //                                     <div className="input-group">
        //                                         <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
        //                                         <div className="input-group-append">
        //                                             <button className="btn btn-primary" type="button">
        //                                                 <i className="fas fa-search fa-sm" />
        //                                             </button>
        //                                         </div>
        //                                     </div>
        //                                 </form>
        //                             </div>
        //                         </li>
        //                         <div className="topbar-divider d-none d-sm-block" />
        //                         <li className="nav-item dropdown no-arrow">
        //                             <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                                 <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
        //                                 {/* <img className="img-profile rounded-circle" src="img/undraw_profile.svg" /> */}
        //                             </a>
        //                             <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
        //                                 {/* <a className="dropdown-item" href="#">
        //                                     <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
        //                                     Profile
        //                                 </a>
        //                                 <a className="dropdown-item" href="#">
        //                                     <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
        //                                     Settings
        //                                 </a>
        //                                 <a className="dropdown-item" href="#">
        //                                     <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
        //                                     Activity Log
        //                                 </a> */}
        //                                 {/* <div className="dropdown-divider" /> */}
        //                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
        //                                     <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
        //                                     Logout
        //                                 </a>
        //                             </div>
        //                         </li>
        //                     </ul>
        //                 </nav>
        //                 <DashboardRoute />
        //             </div>
        //             <footer className="sticky-footer bg-white">
        //                 <div className="container my-auto">
        //                     <div className="copyright text-center my-auto">
        //                         <span>Copyright © Your Website 2021</span>
        //                     </div>
        //                 </div>
        //             </footer>
        //         </div>
        //     </div>
        //     <a className="scroll-to-top rounded" href="#page-top">
        //         <i className="fas fa-angle-up"></i>
        //     </a>
        //     <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //         <div className="modal-dialog" role="document">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
        //                     <button className="close" type="button" data-dismiss="modal" aria-label="Close">
        //                         <span aria-hidden="true">×</span>
        //                     </button>
        //                 </div>
        //                 <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        //                 <div className="modal-footer">
        //                     <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
        //                     <a className="btn btn-primary" href="login.html">Logout</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id='page-top'>
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">Dashboard</div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span>Trang chủ</span></a>
                    </li>
                    <hr className="sidebar-divider" />
                    <div className="sidebar-heading">
                        Quản lý
                    </div>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog" />
                            <span>Quản lý sản phẩm</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link to='/dashboard/listProduct' className="collapse-item pl-1">Danh sách sản phẩm</Link>
                                <Link to='/dashboard/addProduct' className="collapse-item pl-1">Thêm sản phẩm</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench" />
                            <span>Quản lý người dùng</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link to='/dashboard/listUser' className="collapse-item p-0 my-1">Danh sách người dùng</Link>
                                <Link to='dashboard/addUser' className="collapse-item p-0 my-1">Thêm người dùng</Link>

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
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <DashboardRoute />
                    </div>
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Your Website 2021</span>
                            </div>
                        </div>
                    </footer>
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