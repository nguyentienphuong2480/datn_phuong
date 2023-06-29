import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Api from "../../api/Api"
import { ToastContainer, toast } from "react-toastify";


function ListBrand() {
    const [brand, setBrand] = useState();
    const ChangeTrashBrand = (e, id) => {
        e.preventDefault()
        var data = JSON.stringify({
            "id": id
        });

        var config = {
            method: 'put',
            url: Api.ChangeTrashBrand,
            headers: {
                'Authorization': localStorage.accessToken,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                toast(JSON.stringify(response.data.mes))
            })
            .catch(function (error) {
                console.log(error);
            });
            setTimeout(()=>{
                window.location.reload()
            }, 1000)

    }
    const loadData = () => {
        axios.get(Api.Brand)
            .then(res => setBrand(res.data.brandData))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadData()
    }, [brand?.length]);
    console.log(brand)
    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách thương hiệu</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên</th>
                                    <th className="w-25">Hình ảnh</th>
                                    <th>Ngày tạo</th>
                                    <th>Ngày cập nhật</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    brand?.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <img className="w-50" src={item.image} alt=""/>
                                                </td>
                                                <td>{item.createdAt}</td>
                                                <td>{item.updatedAt}</td>
                                                <td>
                                                <input style={{margin: '0 10px'}} onClick={e => { ChangeTrashBrand(e, item.id) }} type="button" value="Xóa" />
                                                     <Link to={'/dashboard/editBrand/' + item.id}>
                                                         <input type="button" value="Sửa" />
                                                     </Link>
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
            <ToastContainer/>
        </div>
    )
}

export default ListBrand