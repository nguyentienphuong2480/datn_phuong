import db from '../models'
import brands from '../../data/brand.json'
import products from '../../data/product.json'

export const insertProduct = () => new Promise(async (resolve, reject) => {
    try {
        const product = Object.entries(products)
        product.forEach(item => {
            item[1]?.map(async product => {
                await db.Product.create({
                    id: Math.random().toString(36).substring(2, 8),
                    name: product.name,
                    price: +product.price,
                    brand: product.brand,
                    image: product.image,
                    description: product.description
                })
            })
        })
        resolve('OK')

    } catch (error) {
        reject(error)
    }
})

export const insertBrand = () => new Promise(async (resolve, reject) => {
    try {
        const brand = Object.entries(brands)
        brand.forEach(item => {
            item[1]?.map(async brand => {
                await db.Brand.create({
                    name: brand.name,
                    image: brand.image
                })
            })
        })
        resolve('OK')

    } catch (error) {
        reject(error)
    }
})

