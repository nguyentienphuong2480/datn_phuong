import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../client/page/HomePage'
import ContactPage from '../client/page/ContactPage'
import ProductPage from '../client/page/ProductPage'
import Search from '../client/orther/Search'
import ProductBrandPage from '../client/page/ProductBrandPage'
import Login from '../client/orther/Login'
import Register from '../client/orther/Register'
import CartPage from '../client/page/CartPage'
import ProductDetailPage from '../client/page/ProductDetailPage'

function ClientRoute() {
    return (
        <>
            <Search />
            <Routes>
                <Route path='/' element={<HomePage />} ></Route>
                <Route path='/contact' element={<ContactPage />} ></Route>
                <Route path='/product' element={<ProductPage />} ></Route>
                <Route path='/productbrand/:id' element={<ProductBrandPage/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/cart' element={<CartPage/>}></Route>
                <Route path='/productdetail/:id' element={<ProductDetailPage/>}></Route>
            </Routes>
        </>
    );
}

export default ClientRoute;