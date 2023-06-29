import React from 'react'
import {Link} from 'react-router-dom'
import { ToastContainer } from "react-toastify";

export default function AddUser(){
    return(
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
                </div>
                <div className="card-body">
                    <form className="user">
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control " placeholder="Tên người dùng" />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control " placeholder="Số điện thoại" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control " placeholder="Địa chỉ" />
                            </div>
                            <div className="col-sm-6">
                                <input type="email" className="form-control " placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control " placeholder="Role" />
                            </div>
                            <div className="col-sm-6">
                                <input type="password" className="form-control " placeholder="Mật khẩu" />
                            </div>
                        </div>
                        
                        <Link className="btn btn-primary btn-block">
                            Thêm người dùng
                        </Link>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}