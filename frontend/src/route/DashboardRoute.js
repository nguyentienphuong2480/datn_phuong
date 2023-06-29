import React from "react";
import { Route, Routes } from "react-router-dom";
import ListOrder from "../dashboard/order/ListOrder";
import Dashboard from "../dashboard/Dashboard";
import ListProduct from "../dashboard/product/ListProduct";
import ListUser from "../dashboard/user/ListUser";
import OrderDetail from "../dashboard/order/OrderDetail";
import AddProduct from "../dashboard/product/AddProduct";
import ListBrand from "../dashboard/brand/ListBrand";
import AddBrand from "../dashboard/brand/AddBrand";
import TrashBrand from "../dashboard/brand/TrashBrand";
import EditBrand from "../dashboard/brand/EditBrand";
import TrashProduct from "../dashboard/product/TrashProduct";
import EditProduct from "../dashboard/product/EditProduct";
import AddUser from "../dashboard/user/AddUser"

export default function DashboardRoute() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Dashboard />}></Route>
                {/* ==============================BRAND================================== */}
                <Route path="/listBrand" element={<ListBrand />}></Route>
                <Route path="/addBrand" element={<AddBrand />}></Route>
                <Route path="/trashBrand" element={<TrashBrand />}></Route>
                <Route path="/editBrand/:id" element={<EditBrand />}></Route>

                {/* ==============================ORDER================================== */}
                <Route path="/listOrder" element={<ListOrder />}></Route>
                <Route path="/orderdetail/:id" element={<OrderDetail />}></Route>


                {/* ==============================PRODUCT================================== */}
                <Route path="/listProduct" element={<ListProduct />}></Route>
                <Route path="/addProduct" element={<AddProduct />}></Route>
                <Route path="/trashProduct" element={<TrashProduct />}></Route>
                <Route path="/editProduct/:id" element={<EditProduct />}></Route>


                <Route path="/listUser" element={<ListUser />}></Route>
                <Route path="/addUser" element={<AddUser />}></Route>
            </Routes>
        </>
    )
}


