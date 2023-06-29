import React from "react";
import axios from "axios";
import Api from "../../api/Api"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { AddToCart} from '../cart/activiteCart'
import { ToastContainer} from 'react-toastify'
import ReactPaginate from 'react-paginate';

export default function ProductBrand(props) {
  const format = Intl.NumberFormat('en')
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 12;
  const pagesVisited = currentPage * productsPerPage;
  const pageCount = Math.ceil(count / productsPerPage);

  useEffect(() => {
    setCurrentPage(0);
    const loadData = () => {
      axios.get(Api.ProductBrand(props.id))
        .then(res => {
          setProducts(res.data.productData.rows)
          setCount(res.data.productData.count)
        })
        .catch(err => console.log(err))

      axios.get(Api.Brand)
        .then(res => setBrands(res.data.brandData))
        .catch(err => console.log(err))
    }
    loadData()
  }, [props.id]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-inline shop-top-menu pb-3 pt-1">
                <li className="list-inline-item">
                  <Link to='/product' className="h3 text-decoration-none mr-3 active-category" >All</Link>
                </li>
                {brands?.map(brand => {
                  return (
                    <li className="list-inline-item" key={brand.id}>
                      <Link to={'/productbrand/' + brand.id} className="h3 text-decoration-none mr-3" >{brand.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="row product">
            {products?.slice(pagesVisited, pagesVisited + productsPerPage).map(product => {
              return (
                <div className="col-md-3 item" key={product.id}>
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={product.image} alt="" />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li><Link to={'/productdetail/' + product.id} className="btn btn-success text-white mt-2"><i className="far fa-eye"></i></Link></li>
                          <li><Link onClick={e => AddToCart(e, product.id)} className="btn btn-success text-white mt-2"><i className="fas fa-cart-plus"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a href="shop-single.html" className="h3 text-decoration-none">{product.name}</a>
                      <p className="text-center mb-0">{format.format(product.price)}<sup>đ</sup></p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <ReactPaginate
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
