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
    console.log(product)
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <Link to='/dashboard/addProduct'><input type="button" value="Add" /></Link>
                <Link to='/dashboard/trashProduct'><input type="button" value="Trash" /></Link>
                {
                    (product?.length) ? (
                        <table className="admin-main border w-100">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Brand</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Act</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product?.map(pro => {
                                        return (
                                            <tr key={pro.id}>
                                                <td>{pro.id}</td>
                                                <td>{pro.name}</td>
                                                <td>{pro.brandData.name}</td>
                                                <td>
                                                    <img className="img-admin" src={pro.image} alt="" />
                                                </td>
                                                <td>{format.format(pro.price)}đ</td>
                                                <td>
                                                    <input onClick={e => ChangeTrashProduct(e, pro.id)} type="button" value="Xóa" />
                                                    <Link to={'/admin/editProduct/'+pro.id}>
                                                        <input type="button" value="Sửa" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    ) : null
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default ListProduct