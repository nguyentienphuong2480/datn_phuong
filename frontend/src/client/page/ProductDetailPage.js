import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ProductDetail from '../product/ProductDetail'
import { useParams } from 'react-router-dom'

export default function ProductDetailPage() {
    const id = useParams()
    return (
        <>
        <Header/>
        <ProductDetail id={id.id}/>
        <Footer/>
        </>
    )
}