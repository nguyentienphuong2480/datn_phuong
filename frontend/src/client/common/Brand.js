import React from 'react';

export default function Brand() {
    return (
        <section className="bg-light py-5">
            <div className="container my-4">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Thương hiệu</h1>
                        <p>
                        Quan trọng là có khách hàng tốt thì mới thành công,
                        nhưng quan trọng thế nào mới có khách hàng tốt.
                        </p>
                    </div>
                    <div className="col-lg-9 m-auto tempaltemo-carousel">
                        <div className="row d-flex flex-row">
                            <div className="col">
                                <div
                                    className="carousel slide carousel-multi-item pt-2 pt-md-0"
                                    id="multi-item-example"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner product-links-wap" role="listbox">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-3 p-md-5">
                                                    <a href="/">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="client/assets/img/Adidas.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="/">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="client/assets/img/Nike.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="/">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="client/assets/img/Puma.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="col-3 p-md-5">
                                                    <a href="/">
                                                        <img
                                                            className="img-fluid brand-img"
                                                            src="client/assets/img/Lacoste.png"
                                                            alt="Brand Logo"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}