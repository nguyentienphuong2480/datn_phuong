import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Api from "../../api/Api";

function ListProduct() {
    const format = Intl.NumberFormat('en')
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      var config = {
               method: 'get',
               url: Api.AllOrder,
             };
             axios(config)
               .then(res => setOrders(res.data.orderData))
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
                                    <th>ID</th>
                                    <th>Tên</th>
                                    <th>Số điện thoại</th>
                                    <th>Email</th>
                                    <th>Tổng tiền</th>
                                    <th>Ngày đặt hàng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td><Link to={'/dashboard/orderdetail/'+ item.id} >{item.id}</Link></td>
                                                <td>{item.name}</td>
                                                <td>
                                                    {item.phone}
                                                </td>
                                                <td>{item.email}</td>
                                                <td>{format.format(item.totalPrice)}<sup>đ</sup></td>
                                                <td>
                                                {new Date(item.createdAt).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}
                                                </td>
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