import React, { useState, useEffect } from "react";
import axios from "axios";
import Api from "../../api/Api";
import { Link } from "react-router-dom";
import { AddToCart } from "../cart/activiteCart";
import { ToastContainer } from "react-toastify";

export default function Featured() {
  const format = Intl.NumberFormat("en");
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    axios.get(Api.BestSeller)
      .then((res) => setBestSellerProducts(res.data.bestSellerData))
      .catch((err) => console.log(err));
    axios.get(Api.NewProduct)
      .then((res) => setNewProducts(res.data.productData))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container py-5">
      <h2>Sản phẩm bán chạy</h2>
      <div className="row">
        <div className="col-lg-12">
          <div className="row product">
            {bestSellerProducts?.map((product) => {
              return (
                <div className="col-md-3 item" key={product.productId}>
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src={product.productData.image}
                        alt=""
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              to={"/productdetail/" + product.productId}
                              className="btn btn-success text-white mt-2"
                            >
                              <i className="far fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={(e) => AddToCart(e, product.id)}
                              className="btn btn-success text-white mt-2"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        {product.productData.name}
                      </a>
                      <p className="text-center mb-0">
                        {format.format(product.productData.price)}
                        <sup>đ</sup>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <h2>Sản phẩm mới</h2>
      <div className="row">
        <div className="col-lg-12">
          <div className="row product">
            {newProducts?.map((product) => {
              return (
                <div className="col-md-3 item" key={product.id}>
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src={product.image}
                        alt=""
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              to={"/productdetail/" + product.id}
                              className="btn btn-success text-white mt-2"
                            >
                              <i className="far fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={(e) => AddToCart(e, product.id)}
                              className="btn btn-success text-white mt-2"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        {product.name}
                      </a>
                      <p className="text-center mb-0">
                        {format.format(product.price)}
                        <sup>đ</sup>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
