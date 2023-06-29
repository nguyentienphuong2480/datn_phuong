// import * as services from "../services";
// import { internalServerErrol, badRequest } from "../middlewares/handleError";
// import joi from "joi";
// import { name, status, id } from "../helpers/joiSchema";

// export const getBrand = async (req, res)=>{
//     try {
//         const response = await services.getBrand()
//         return res.status(200).json(response)
//     } catch (error) {
//         return internalServerErrol(res)
//     }
// }

// export const getOneCategory = async (req, res)=>{
//     try {
//         const response = await services.getOneCategory(req.params.id)
//         return res.status(200).json(response)
//     } catch (error) {
//         return internalServerErrol(res)
//     }
// }

// export const addCategory = async (req, res)=>{
//     try {
//         const {error} = joi.object({name, status}).validate(req.body)
//         if (error) {
//             return badRequest(error.details[0].message, res)
//         }
//         const response = await services.addCategory(req.body)
//         return res.status(200).json(response)
//     } catch (error) {
//         return internalServerErrol(res)
//     }
// }

// export const EditCategory = async (req, res)=>{
//     try {
//         const {error} = joi.object({id, name, status}).validate(req.body)
//         if (error) {
//             return badRequest(error.details[0].message, res)
//         }
//         const response = await services.EditCategory(req.body)
//         return res.status(200).json(response)
//     } catch (error) {
//         return internalServerErrol(res)
//     }
// }

// export const getTrash = async (req, res)=>{
//     try {
//         const response = await services.getTrash()
//         return res.status(200).json(response)
//     } catch (error) {
//         return internalServerErrol(res)
//     }
// }

// export const trashCategory = async (req, res)=>{
//     try {
//         const {error} = joi.object({id}).validate(req.body)
//         if(error){
//             return badRequest(error.details[0].message, res)
//         }
//         const response = await services.trashCategory(req.body)
//         return res.status(200).json(response)
//     } catch (error) {
//         return internalServerErrol(res)
//     }
// }

import * as services from "../services";
import { internalServerErrol, badRequest } from "../middlewares/handleError";
import joi from "joi";
import { id, name, image } from "../helpers/joiSchema";
const cloudinary = require("cloudinary").v2

export const getAllBrand = async (req, res)=>{
    try {
        const response = await services.getAllBrand()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const addBrand = async (req, res)=>{
    try {
        const fileData = req.file
        const {error} = joi.object({ name, image }).validate({...req.body, image: fileData?.path})
        if (error) {
            if(fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        }
        const response = await services.addBrand(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getOneBrand = async (req, res) =>{
    try {
        const response = await services.getOneBrand(req.params.id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)   
    }
}

export const editBrand = async (req, res)=>{
    try {
        const fileData = req.file
        const {error} = joi.object({ id, name }).validate({...req.body})
        if (error) {
            if(fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        }
        const response = await services.editBrand(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getTrashBrand = async (req, res) => {
    try {
        const response = await services.getTrashBrand()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const changeTrashBrand = async (req, res) => {
    try {
        const {error} = joi.object({id}).validate(req.body)
        if(error){
            return badRequest(error.details[0].message, res)
        }
        const response = await services.changeTrashBrand(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}