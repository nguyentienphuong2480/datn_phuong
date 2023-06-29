import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                TP.HCM
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <Link className="text-decoration-none" href="tel:010-020-0340">0366017402</Link>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <Link className="text-decoration-none" href="mailto:info@company.com">Apolo.caizo2480@gmail.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-center text-light">
                               Nguyễn Tiến Phương
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}