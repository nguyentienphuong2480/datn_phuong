import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../api/Api"

function ListUser() {
    const [user, setUser] = useState();
    const loadData = () => {
        axios.get(Api.AllUser)
            .then(res => setUser(res.data.userData))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadData()
    }, [user?.length]);
    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách người dùng</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Địa chỉ</th>
                                    <th>Role</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user?.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.address}</td>
                                                <td>{item && item.roleData.value}</td>
                                                <td>
                                                <input style={{margin: '0 10px'}} type="button" value="Xóa" />
                                                     <input type="button" value="Sửa" />
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

export default ListUser