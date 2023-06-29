import React, { useState, useEffect } from "react";
import axios from "axios";
import Api from "../../api/Api";
import { AddToCart } from "../cart/activiteCart";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Product() {
  const format = Intl.NumberFormat("en");
  const [state, setState] = useState({
    products: [],
    brands: [],
    pageNumber: 0,
  });
  const productsPerPage = 12;
  const pagesVisited = state.pageNumber * productsPerPage;

  const pageCount = Math.ceil(state.products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setState({ ...state, pageNumber: selected });
  };

  const displayProducts = React.useMemo(() => {
    return state.products
      .slice(pagesVisited, pagesVisited + productsPerPage)
      .map((product) => (
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
              <a href="shop-single.html" className="h3 text-decoration-none">
                {product.name}
              </a>
              <p className="text-center mb-0">
                {format.format(product.price)}
                <sup>đ</sup>
              </p>
            </div>
          </div>
        </div>
      ));
  }, [pagesVisited, state.products]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [Api.Product, Api.Brand];
        const [resProducts, resBrands] = await Promise.all(
          urls.map((url) => axios.get(url))
        );
        setState({
          ...state,
          products: resProducts.data.productData.rows,
          brands: resBrands.data.brandData,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="col-md-12">
            <ul className="list-inline shop-top-menu pb-3 pt-1">
              <li className="list-inline-item">
                <Link
                  to="/product"
                  className="h3 text-decoration-none mr-3 active-category"
                >
                  All
                </Link>
              </li>
              {state.brands?.map((brand) => {
                return (
                  <li className="list-inline-item" key={brand.id}>
                    <Link
                      to={"/productbrand/" + brand.id}
                      className="h3 text-decoration-none mr-3"
                    >
                      {brand.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="row product">{displayProducts}</div>
          <div div="row">
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              activeClassName={"active"}
              disabledClassName={"disabled"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}