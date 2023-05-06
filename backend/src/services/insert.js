import db from '../models'
import brands from '../../data/brand.json'
import products from '../../data/product.json'
import details from '../../data/detail.json'

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
                    image: product.image
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

export const insertProductDeatil = () => new Promise(async (resolve, reject) => {
    try {
        const detail = Object.entries(details)
        detail.forEach(item => {
            item[1]?.map(async detail => {
                var id = await db.Product.findOne({
                    where: { name: detail.name },
                    raw: true,
                    attributes: ['id']
                })
                await db.ProductDetail.create({
                    id: id.id,
                    description: detail.description,
                    img1: detail.img1,
                    img2: detail.img2,
                    img3: detail.img3,
                    img4: detail.img4,
                    img5: detail.img5,
                    img6: detail.img6
                })
            })
        })
        resolve('OK')
    } catch (error) {
        reject(error)
    }
})