import React from "react";
import { Route, Routes } from "react-router-dom";
import ListCategory from "../dashboard/category/ListCategory";
import AddCategory from "../dashboard/category/AddCategory";
import Dashboard from "../dashboard/Dashboard";
import ListSubcategory from "../dashboard/subcategory/ListSubcategory";
import ListProduct from "../dashboard/product/ListProduct";
import ListUser from "../dashboard/user/ListUser";
import TrashCategory from "../dashboard/category/TrashCategory";
import EditCategory from "../dashboard/category/EditCategory";
import AddProduct from "../dashboard/product/AddProduct";
import ListBrand from "../dashboard/brand/ListBrand";
import AddBrand from "../dashboard/brand/AddBrand";
import TrashBrand from "../dashboard/brand/TrashBrand";
import EditBrand from "../dashboard/brand/EditBrand";
import TrashProduct from "../dashboard/product/TrashProduct";
import EditProduct from "../dashboard/product/EditProduct";
import AddSubcategory from "../dashboard/subcategory/AddSubcategory";

export default function AdminRoute() {
    return (
        <>
            <Routes>
                <Route path="*" element={<Dashboard />}></Route>
                {/* ==============================BRAND================================== */}
                <Route path="/listBrand" element={<ListBrand />}></Route>
                <Route path="/addBrand" element={<AddBrand />}></Route>
                <Route path="/trashBrand" element={<TrashBrand />}></Route>
                <Route path="/editBrand/:id" element={<EditBrand />}></Route>

                {/* ==============================CATEGORY================================== */}
                <Route path="/listCategory" element={<ListCategory />}></Route>
                <Route path="/addCategory" element={<AddCategory />}></Route>
                <Route path="/trashCategory" element={<TrashCategory />}></Route>
                <Route path="/editCategory/:id" element={<EditCategory />}></Route>

                {/* ==============================SUBCATEGORY================================== */}
                <Route path="/listSubcategory" element={<ListSubcategory />}></Route>
                <Route path="/addSubcategory" element={<AddSubcategory />}></Route>

                {/* ==============================PRODUCT================================== */}
                <Route path="/listProduct" element={<ListProduct />}></Route>
                <Route path="/addProduct" element={<AddProduct />}></Route>
                <Route path="/trashProduct" element={<TrashProduct />}></Route>
                <Route path="/editProduct/:id" element={<EditProduct />}></Route>


                <Route path="/listUser" element={<ListUser />}></Route>
            </Routes>
        </>
    )
}


