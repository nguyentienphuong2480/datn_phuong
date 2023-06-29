// import db from '../models'

// export const getBrand = () => new Promise(async (resolve, reject) => {
//     try {
//         const response = await db.Brand.findAll({
//             where: [ {
//                 trash: 0
//             }]
//         })

//         resolve({
//             err: 0,
//             mes: 'Got',
//             brandData: response
//         })
//     } catch (error) {
//         reject(error)
//     }
// })

// export const getOneCategory = (id) => new Promise(async (resolve, reject) => {
//     try {
//         const response = await db.Category.findOne({
//             where: [{id: id}]
//         })
//         resolve({
//             err: 0,
//             mes: 'Got',
//             categoryData: response
//         })
//     } catch (error) {
//         reject(error)
//     }
// })

// export const addCategory = (body) => new Promise(async (resolve, reject) => {
//     try {
//         const response = await db.Category.findOrCreate({
//             where: [{
//                 name: body.name
//             }],
//             defaults: {
//                 ...body
//             }
//         })

//         resolve({
//             err: response[1] ? 0 : 1,
//             mes: response[1] ? 'Created successfully' : 'Category already exists',
//         })
//     } catch (error) {
//         reject(error)
//     }
// })

// export const EditCategory = (body) => new Promise(async (resolve, reject) => {
//     try {
//         const response = await db.Category.update(
//             {
//                 ...body
//             },
//             {
//                 where: {id: body.id}
//             }
//         )

//         resolve({
//             err: response ? 0 : 1,
//             mes: response ? `${body.id} editted successfully` : 'Can not edit category',
//         })
//     } catch (error) {
//         reject(error)
//     }
// })

// export const getTrash = () =>new Promise(async (resolve, reject) => {
//     try {
//         const response = await db.Category.findAll({
//             where: {trash : 1},
//             raw: true
//         })
//         resolve({
//             err: 0,
//             mes: 'Got',
//             trashCategory: response
//         })
//     } catch (error) {
//         reject(error)
//     }
// })

// export const trashCategory = (body) => new Promise(async (resolve, reject) => {
//     try {
//         const trash = await db.Category.findOne({
//             where: {
//                 id: body.id
//             },
//             raw: true
//         })
//         const response = await db.Category.update({
//             trash: (trash.trash ? 0 : 1)
//         }, {
//             where: {
//                 id: body.id
//             },
//             raw: true
//         })
//         resolve({
//             err: response? 0 : 1,
//             mes: trash.trash?`${body.id} restored`:`${body.id} moved to trash`
//         })
//     } catch (error) {
//         reject(error)
//     }
// })



import db from "../models";
const cloudinary = require('cloudinary').v2

export const getAllBrand = () => new Promise(async (resolve, reject) =>{
    try {
        const response = await db.Brand.findAll({
            where:{trash:0}
        })
        resolve({
            err: 0,
            mes: 'Got',
            brandData: response
        })
    } catch (error) {
        reject(error);
    }
})

export const addBrand = (body, fileData) => new Promise(async (resolve, reject) =>{
    try {
        const response = await db.Brand.findOrCreate({
            where: {name: body.name},
            defaults:{
                ...body,
                image: fileData?.path,
                filename: fileData.filename
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Brand already exists'
        })
        if(fileData && !response[1]) cloudinary.uploader.destroy(fileData.filename)
    } catch (error) {
        reject(error)
        if(fileData) cloudinary.uploader.destroy(fileData.filename)
    }
})

export const getOneBrand = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Brand.findOne({
            where: {id}
        })
        resolve({
            err: 0,
            mes: 'Got',
            brandData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const editBrand = (body, fileData) => new Promise(async (resolve, reject) =>{
    try {
        const data = await db.Brand.findOne({
            where:{id: body.id}
        })
        if(fileData){
            body.image = fileData.path
            body.filename= fileData.filename
            cloudinary.uploader.destroy(data.filename)
        }
        
        const response = await db.Brand.update(
            {
                ...body
            },
            {
                where: {id: body.id}
            }
        )
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Editted' : 'Brand already exists',
        })
        if(fileData && !response) cloudinary.uploader.destroy(fileData.filename)
    } catch (error) {
        reject(error)
        if(fileData) cloudinary.uploader.destroy(fileData.filename)
    }
})

export const getTrashBrand = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Brand.findAll({
            where:{trash: 1}
        })
        resolve({
            err: 0,
            mes: 'Got',
            trashBrand: response
        })
    } catch (error) {
        reject(error)
    }
})

export const changeTrashBrand = (body) => new Promise(async (resolve, reject) => {
    try {
        const trash = await db.Brand.findOne({
            where: {id: body.id},
            raw: true
        })
        const response = await db.Brand.update(
            {
                trash: (trash.trash? 0 : 1)
            },
            {
                where: {id: body.id}
            }
        )
        resolve({
            err: response? 0 : 1,
            mes: trash.trash?`${body.id} restored`:`${body.id} moved to trash`
        })
    } catch (error) {
        reject(error)
    }
})