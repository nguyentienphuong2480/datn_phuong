import React, { useState, useEffect } from "react";
import Api from "../../api/Api";
import axios from "axios";
import { Link } from "react-router-dom";
import { AddToCart } from "../cart/activiteCart";
import { ToastContainer } from "react-toastify";

function Search() {
  const format = Intl.NumberFormat("en");
  const [name, setName] = useState();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(Api.Search(name))
      .then((res) => {
        setProduct(res.data.productData);
      })
      .catch((err) => console.log(err));
  }, [name]);
  return (
    <div
      className="modal fade bg-white"
      id="search"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="w-100 pt-1 mb-5 text-right">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form
          action=""
          method="get"
          className="modal-content modal-body border-0 p-0"
        >
          <div className="input-group mb-2">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="inputModalSearch"
              placeholder="Search ..."
            />
          </div>
        </form>
        <div></div>
      </div>
      {product && (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="row product">
                {product?.map((product) => {
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
      )}
    </div>
  );
}

export default Search;
