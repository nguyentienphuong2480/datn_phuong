import React from "react";
import axios from "axios";
import Api from "../../api/Api"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

// export default function Product() {
//   const format = Intl.NumberFormat('en')
//   const [count, setCount] = useState();
//   const [products, setProducts] = useState();
//   const [brands, setBrands] = useState();
//   const [brand, setBrand] = useState();
//   const [pageNumber, setpageNumber] = useState(1);
//   const [beginGet, setbeginGet] = useState(0);
//   const [endGet, setendGet] = useState(12);
//   const page = []
//   let limit = 12
//   for (let i = 1; i <= Math.ceil(count / limit); i++) page.push(i)
//   const NewPageNumber = (e, i) => {
//     e.preventDefault()
//     setpageNumber(i)
//     setbeginGet(limit * (i - 1))
//     setendGet(limit * i)
//   }
//   const NewBrand = (e, id) => {
//     e.preventDefault()
//     setBrand(id)
//     var data = JSON.stringify({
//       "brand": id
//     });
//     var config = {
//       method: 'get',
//       url: Api.ProductBrand,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: data
//     };
//     console.log(config)
//     axios(config)
//       .then(res => {
//         setProducts(res.data.productData.rows)
//         setCount(res.data.productData.count)
//       })
//       .catch(err => console.log(err));
//   }
//   const listNumberPage = page.map(i => {
//     if (i === pageNumber)
//       return (
//         <li className="page-item" key={i}>
//           <Link className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark active">{i}</Link>
//         </li>
//       )
//     else
//       return (
//         <li className="page-item" onClick={e => NewPageNumber(e, i)} key={i}>
//           <Link className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark">{i}</Link>
//         </li>
//       )
//   })

//   useEffect(() => {
//     const loadData = () => {
//       var data = JSON.stringify({
//         "brand": brand
//       });
//       var config = {
//         method: 'get',
//         url: Api.Product,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         data: data
//       };
//       axios(config)
//         .then(res => {
//           setProducts(res.data.productData.rows)
//           setCount(res.data.productData.count)
//         })
//         .catch(err => console.log(err));
//       axios.get(Api.Brand)
//         .then(res => setBrands(res.data.brandData))
//         .catch(err => console.log(err))
//     }
//     loadData()
//   }, []);
//   console.log(brand, products)
//   return (
//     <div className="container py-5">
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="row">
//             <div className="col-md-12">
//               <ul className="list-inline shop-top-menu pb-3 pt-1">
//                 <li className="list-inline-item">
//                   <Link to='/product' className="h3 text-decoration-none mr-3 active-category" >All</Link>
//                 </li>
//                 {
//                   brands?.map(brand => {
//                     return (
//                       <li className="list-inline-item">
//                         <Link onClick={e => NewBrand(e, brand.id)} className="h3 text-decoration-none mr-3" >{brand.name}</Link>
//                       </li>
//                     )
//                   })
//                 }

//                 {/* <li className="list-inline-item">
//                   <Link className="h3 text-decoration-none" >Women's</Link>
//                 </li> */}
//               </ul>
//             </div>
//           </div>
//           <div className="row product">
//             {
//               (!brand) ? products?.slice((beginGet), endGet).map(product => {
//                 return (
//                   <div className="col-md-3 item" key={product.id}>
//                     <div className="card mb-4 product-wap rounded-0">
//                       <div className="card rounded-0">
//                         <img className="card-img rounded-0 img-fluid" src={product.image} alt="" />
//                         <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
//                           <ul className="list-unstyled">
//                             <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
//                             <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="card-body">
//                         <a href="shop-single.html" className="h3 text-decoration-none">{product.name}</a>
//                         {/* <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
//                             <li>M/L/X/XL</li>
//                           </ul> */}
//                         <p className="text-center mb-0">{format.format(product.price)}<sup>đ</sup></p>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               }) :
//                 products?.slice((beginGet), endGet).map(product => {
//                   if (product.brand === brand)
//                     return (
//                       <div className="col-md-3 item" key={product.id}>
//                         <div className="card mb-4 product-wap rounded-0">
//                           <div className="card rounded-0">
//                             <img className="card-img rounded-0 img-fluid" src={product.image} alt="" />
//                             <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
//                               <ul className="list-unstyled">
//                                 <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
//                                 <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="card-body">
//                             <a href="shop-single.html" className="h3 text-decoration-none">{product.name}</a>
//                             {/* <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
//                             <li>M/L/X/XL</li>
//                           </ul> */}
//                             <p className="text-center mb-0">{format.format(product.price)}<sup>đ</sup></p>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                 })

//             }

//           </div>
//           <div div="row">
//             <ul className="pagination pagination-lg justify-content-center">
//               {
//                 listNumberPage
//               }
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function Product() {
  const format = Intl.NumberFormat('en')
  const [count, setCount] = useState();
  const [products, setProducts] = useState();
  const [brands, setBrands] = useState();
  const [pageNumber, setpageNumber] = useState(1);
  const [beginGet, setbeginGet] = useState(0);
  const [endGet, setendGet] = useState(12);
  const page = []
  let limit = 12
  for (let i = 1; i <= Math.ceil(count / limit); i++) page.push(i)
  const NewPageNumber = (e, i) => {
    e.preventDefault()
    setpageNumber(i)
    setbeginGet(limit * (i - 1))
    setendGet(limit * i)
  }
  const listNumberPage = page.map(i => {
    if (i === pageNumber)
      return (
        <li className="page-item" key={i}>
          <Link className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark active">{i}</Link>
        </li>
      )
    else
      return (
        <li className="page-item" onClick={e => NewPageNumber(e, i)} key={i}>
          <Link className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark">{i}</Link>
        </li>
      )
  })

  useEffect(() => {
    const loadData = () => {
      var config = {
        method: 'get',
        url: Api.Product,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios(config)
        .then(res => {
          setProducts(res.data.productData.rows)
          setCount(res.data.productData.count)
        })
        .catch(err => console.log(err));
      axios.get(Api.Brand)
        .then(res => setBrands(res.data.brandData))
        .catch(err => console.log(err))
    }
    loadData()
  }, []);
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
                {
                  brands?.map(brand => {
                    return (
                      <li className="list-inline-item">
                        <Link to={'/productbrand/'+brand.id} className="h3 text-decoration-none mr-3" >{brand.name}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="row product">
            {
              products?.slice((beginGet), endGet).map(product => {
                return (
                  <div className="col-md-3 item" key={product.id}>
                    <div className="card mb-4 product-wap rounded-0">
                      <div className="card rounded-0">
                        <img className="card-img rounded-0 img-fluid" src={product.image} alt="" />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                            <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                            <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <a href="shop-single.html" className="h3 text-decoration-none">{product.name}</a>
                        {/* <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                              <li>M/L/X/XL</li>
                            </ul> */}
                        <p className="text-center mb-0">{format.format(product.price)}<sup>đ</sup></p>
                      </div>
                    </div>
                  </div>
                )
              })

            }

          </div>
          <div div="row">
            <ul className="pagination pagination-lg justify-content-center">
              {
                listNumberPage
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}