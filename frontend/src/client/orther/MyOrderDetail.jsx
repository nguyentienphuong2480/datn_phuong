import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Api from "../../api/Api";

function ListProduct(prop) {
    const format = Intl.NumberFormat('en')
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      var config = {
               method: 'get',
               url: Api.AllOrderDetail(prop.id),
               headers: {
                 'Authorization': localStorage.accessToken
               }
             };
             axios(config)
               .then(res => setOrders(res.data.orderDetailData))
               .catch(err => console.log(err));
    }, []);
console.log(orders)
    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Đơn hàng</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>Mã đơn hàng</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Số lượng</th>
                                    <th>Giá</th>
                                    {/* <th>Trạng thái</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders?.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.orderID}</td>
                                                <td>{item.productData.name}</td>
                                                <td>
                                                    <img className='w-25' src={item.productData.image} alt=''/>
                                                    
                                                </td>
                                                <td>{item.quantity}</td>
                                                <td>{format.format(item.productData.price)}<sup>đ</sup></td>
                                                {/* <td>
                                                
                                                </td> */}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListProduct