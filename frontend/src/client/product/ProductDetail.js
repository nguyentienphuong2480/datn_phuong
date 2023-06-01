import React, { useState, useEffect } from "react";
import axios from "axios";
import Api from "../../api/Api"
import { AddToCart} from '../cart/activiteCart'
import {Link} from 'react-router-dom'
import { ToastContainer} from 'react-toastify'

// import { Link } from 'react-router-dom'

export default function ProductDetail(props) {
    const format = Intl.NumberFormat('en')
    const [detail, setDetail] = useState()
    const [product, setProduct] = useState()
    useEffect(() => {
        const loadData = () => {
            axios.get(Api.ProductDetail(props.id))
                .then(res => {
                    setProduct(res.data.productData)
                    setDetail(res.data.detail)
                })
                .catch(err => console.log(err))

        }
        loadData()
    }, [props.id]);
    console.log(product)
    return (
        <section className="" id="product_detail">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="image-container">
                            <img src={detail && detail.img1} alt="" className="main-image" />
                            <div className="thumbnail-container d-none">
                                <img src={detail && detail.img1} alt="" className="thumbnail" />
                                <img src={detail && detail.img2} alt="" className="thumbnail" />
                                <img src={detail && detail.img3} alt="" className="thumbnail" />
                                <img src={detail && detail.img4} alt="" className="thumbnail" />
                                <img src={detail && detail.img5} alt="" className="thumbnail" />
                                <img src={detail && detail.img6} alt="" className="thumbnail" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">{product && product.name}</h1>
                                <p className="h3 py-2">{product && format.format(product.price)}<sup>đ</sup></p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Thương hiệu:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>{product && product.brandData && product.brandData.name}</strong></p>
                                    </li>
                                </ul>
                                <h6>Mô tả sản phẩm:</h6>
                                <p>{detail && detail.description}</p>
                                <form>
                                    <input type="hidden" name="product-title" defaultValue="Activewear" />
                                    <div className="row">
                                        {/* <div className="col-auto">
                                            <ul className="list-inline pb-3">
                                                <li className="list-inline-item">Size :
                                                    <input type="hidden" name="product-size" id="product-size" defaultValue="S" />
                                                </li>
                                                <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                                                <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                                                <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                                                <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                                            </ul>
                                        </div> */}
                                        {/* <div className="col-auto">
                                            <ul className="list-inline pb-3">
                                                <li className="list-inline-item text-right">
                                                    Quantity
                                                    <input type="hidden" name="product-quanity" id="product-quanity" defaultValue={1} />
                                                </li>
                                                <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                                <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                                <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div className="row pb-3">
                                        {/* <div cl</div>assName="col d-grid">
                                            <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                        </div> */}
                                        <div className="col d-grid">
                                            <Link className="btn btn-success btn-lg" onClick={e=>AddToCart(e, product && product.id)}>Thêm vào giỏ hàng</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </section>
    );
}
var script = document.createElement("script");
script.src = "client/assets/js/product-detail.js";
document.head.appendChild(script);