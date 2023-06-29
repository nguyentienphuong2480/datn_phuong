import React, { useState, useEffect } from "react";
import axios from "axios";
import Api from "../../api/Api"
import { AddToCart} from '../cart/activiteCart'
import {Link} from 'react-router-dom'
import { ToastContainer} from 'react-toastify'

export default function ProductDetail(props) {
    const format = Intl.NumberFormat('en')
    const [product, setProduct] = useState()
    useEffect(() => {
        const loadData = () => {
            axios.get(Api.GetOneProduct(props.id))
                .then(res => {
                    setProduct(res.data.productData)
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
                            <img src={product && product.image} alt="" className="main-image" />
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
                                <p>{product && product.description}</p>
                                <form>
                                    <input type="hidden" name="product-title" defaultValue="Activewear" />
                                    <div className="row">
                                    </div>
                                    <div className="row pb-3">
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
