import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Api from "../../api/Api";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";

function ListProduct() {
    const format = Intl.NumberFormat('en')
    const [product, setProduct] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    // Số lượng items hiển thị trong 1 trang
    const itemsPerPage = 10;
    // Tổng số trang được tính toán từ số lượng items và số lượng items mỗi trang
    const pageCount = Math.ceil(product.length / itemsPerPage);
    // Tính vị trí bắt đầu của item trong trang hiện tại
    const offset = pageNumber * itemsPerPage;
    // Lấy ra danh sách các sản phẩm theo trang hiện tại
    const currentPageData = product.slice(offset, offset + itemsPerPage);

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

    useEffect(() => {
        axios.get(Api.Product)
            .then(res => setProduct(res.data.productData.rows))
            .catch(err => console.log(err))
    }, []);

    // Hàm xử lý khi chuyển trang
    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
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
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPageData.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <img className="w-50" src={item.image} alt=""/>
                                                </td>
                                                <td>{item.brandData.name}</td>
                                                <td>{format.format(item.price)}<sup>đ</sup></td>
                                                <td>
                                                <input  onClick={e => ChangeTrashProduct(e, item.id)} type="button" value="Xóa" />
                                                    <Link to={'/dashboard/editProduct/' + item.id}>
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
                    {/* Thêm phân trang */}
                    <ReactPaginate
                        previousLabel={null}
                        nextLabel={null}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        previousLinkClassName ={"page-link"}
                        nextLinkClassName={"page-link"}
                        disabledClassName={"disabled"}
                        activeClassName={"active"}
                    />
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}
export default ListProduct