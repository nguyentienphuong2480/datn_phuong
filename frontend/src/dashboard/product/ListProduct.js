import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Api from "../../api/Api"
import { ToastContainer, toast } from "react-toastify";

function ListProduct() {
    const format = Intl.NumberFormat('en')
    const [product, setProduct] = useState();
    const ChangeTrashProduct = (e, id) => {
        e.preventDefault()
        var data = JSON.stringify({
            "id": id
        });
        var config = {
            method: 'put',
            url: Api.ChangeTrashProduct,
            headers: {
                'Authorization': localStorage.accessToken,
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                toast(JSON.stringify(response.data.mes))
            })
            .catch(function (error) {
                console.log(error);
            });
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }
    const loadData = () => {
        axios.get(Api.Product)
            .then(res => setProduct(res.data.productData.rows))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadData()
    }, [product?.length]);
    return (
        // <div className="content-wrapper">
        //     <div className="container-xxl flex-grow-1 container-p-y">
        //         <Link to='/dashboard/addProduct'><input type="button" value="Add" /></Link>
        //         <Link to='/dashboard/trashProduct'><input type="button" value="Trash" /></Link>
        //         {
        //             (product?.length) ? (
        //                 <table className="admin-main border w-100">
        //                     <thead>
        //                         <tr>
        //                             <th>ID</th>
        //                             <th>Name</th>
        //                             <th>Brand</th>
        //                             <th>Image</th>
        //                             <th>Price</th>
        //                             <th>Act</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {
        //                             product?.map(pro => {
        //                                 return (
        //                                     <tr key={pro.id}>
        //                                         <td>{pro.id}</td>
        //                                         <td>{pro.name}</td>
        //                                         <td>{pro.brandData.name}</td>
        //                                         <td>
        //                                             <img className="img-admin" src={pro.image} alt="" />
        //                                         </td>
        //                                         <td>{format.format(pro.price)}đ</td>
        //                                         <td>
        //                                             <input onClick={e => ChangeTrashProduct(e, pro.id)} type="button" value="Xóa" />
        //                                             <Link to={'/admin/editProduct/'+pro.id}>
        //                                                 <input type="button" value="Sửa" />
        //                                             </Link>
        //                                         </td>
        //                                     </tr>
        //                                 )
        //                             })
        //                         }
        //                     </tbody>
        //                 </table>
        //             ) : null
        //         }
        //     </div>
        //     <ToastContainer />
        // </div>
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách sản phẩm</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên</th>
                                    <th className="w-25">Hình ảnh</th>
                                    <th>Thương hiệu</th>
                                    <th>Giá</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th className='w-auto'>ID</th>
                                    <th className='w-auto'>Tên</th>
                                    <th className='w-auto'>Hình ảnh</th>
                                    <th className='w-auto'>Thương hiệu</th>
                                    <th className='w-auto'>Giá</th>
                                    <th className='w-auto'>Salary</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    product?.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <img className="w-50" src={item.image} alt=""/>
                                                </td>
                                                <td>{item.brandData.name}</td>
                                                <td>{item.price}</td>
                                                <td></td>
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