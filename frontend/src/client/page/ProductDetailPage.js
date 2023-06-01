import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ProductDetail from '../product/ProductDetail'
import { useParams } from 'react-router-dom'

export default function ProductDetailPage() {
    return (
        <>
        <Header/>
        <ProductDetail/>
        <Footer/>
        </>
    )
}