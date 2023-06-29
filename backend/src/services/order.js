import db from "../models";
import { v4 as generateId} from 'uuid'

export const addOrder = (id, body) => new Promise(async(resolve, reject) => {
    try { 
        const orderId = generateId()
        await db.Order.create({
            id: orderId,
            customerID: id,
            name: body.name,
            phone: body.phone,
            email: body.email,
            deliveryAddress: body.deliveryAddress,
            totalPrice: body.totalPrice
        })
        body.carts.map(async item => {
            await db.OrderDetail.create({
                orderID: orderId,
                productID: item.productID,
                quantity: item.quantity
            })
        })
        resolve({
            err: 0,
            mes: 'Đặt hàng thành công'
        })
    } catch (error) {
        reject(error);
    }
})

export const getAllOrder = (id) => new Promise(async(resolve, reject) => {
    try { 
        const response = await db.Order.findAll({
            where:{customerID:id}
        })
        resolve({
            err: 0,
            orderData: response
        })
    } catch (error) {
        reject(error);
    }
})
export const getOrder = () => new Promise(async(resolve, reject) => {
    try { 
        const response = await db.Order.findAll()
        resolve({
            err: 0,
            orderData: response
        })
    } catch (error) {
        reject(error);
    }
})