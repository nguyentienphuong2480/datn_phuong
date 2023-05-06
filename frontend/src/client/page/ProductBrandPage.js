import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import ProductBrand from '../product/ProductBrand'
import { useParams } from 'react-router-dom'

export default function ProductBrandPage() {
    const id = useParams()
    return (
        <>
        <Header/>
        <ProductBrand id = {id.id}/>
        <Footer/>
        </>
    )
}

