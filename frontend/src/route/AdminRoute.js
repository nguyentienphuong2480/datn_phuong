import React from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Index from "../admin/Index";

export default function AdminRoute() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <link href="img/favicon.ico" rel="icon" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap"
                        rel="stylesheet" />

                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                    <link href="admin/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                    <link href="admin/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

                    <link href="admin/css/bootstrap.min.css" rel="stylesheet" />

                    <link href="admin/css/style.css" rel="stylesheet" />
                </Helmet>
            </HelmetProvider>
            <div className="container-fluid position-relative d-flex p-0">
                <div className="sidebar pe-4 pb-3">
                    <nav className="navbar bg-secondary navbar-dark">
                        <a href="/admin" className="navbar-brand mx-4 mb-3">
                            <h3 className="text-primary"><i className="fa fa-user-edit me-2" />Zay</h3>
                        </a>
                        <div className="navbar-nav w-100">
                            <a href="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2" />Dashboard</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2" />Elements</a>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <a href="button.html" className="dropdown-item">Buttons</a>
                                    <a href="typography.html" className="dropdown-item">Typography</a>
                                    <a href="element.html" className="dropdown-item">Other Elements</a>
                                </div>
                            </div>
                            <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2" />Widgets</a>
                            <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2" />Forms</a>
                            <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2" />Tables</a>
                            <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2" />Charts</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Pages</a>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <a href="signin.html" className="dropdown-item">Sign In</a>
                                    <a href="signup.html" className="dropdown-item">Sign Up</a>
                                    <a href="404.html" className="dropdown-item">404 Error</a>
                                    <a href="blank.html" className="dropdown-item">Blank Page</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="content">
                    <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                        <div className="navbar-nav align-items-center ms-auto">
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <img className="rounded-circle me-lg-2" src="admin/img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                                    <span className="d-none d-lg-inline-flex">John Doe</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                    <a href="#" className="dropdown-item">My Profile</a>
                                    <a href="#" className="dropdown-item">Log Out</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="*" element={<Index/>} ></Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}