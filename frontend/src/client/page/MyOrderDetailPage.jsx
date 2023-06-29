import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import MyOrderDetail from '../orther/MyOrderDetail'
import { useParams } from 'react-router-dom'

export default function MyOrderPage(){
    const id = useParams()
    return(
        <>
        <Header/>
        <MyOrderDetail  id={id.id}/>       
        <Footer/>
        </>
    )
}