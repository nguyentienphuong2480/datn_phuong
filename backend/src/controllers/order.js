import joi from 'joi'
import { badRequest, internalServerErrol } from '../middlewares/handleError'
import * as services from '../services'
import { id, name, email, address, phone } from '../helpers/joiSchema'

export const addOrder = async (req, res) =>{
    try {
        const {error} = joi.object({id}).validate({id: req.user.id})
        if(error){
            return badRequest(error.details[0].message, res)
        }
        const response = await services.addOrder(req.user.id, req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getAllOrder = async (req, res) =>{
    try {
        const response = await services.getAllOrder(req.user.id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}
export const getOrder = async (req, res) =>{
    try {
        const response = await services.getOrder()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}