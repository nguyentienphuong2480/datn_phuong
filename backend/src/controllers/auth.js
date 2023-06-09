import * as services from "../services";
import { internalServerErrol, badRequest } from "../middlewares/handleError";
import { email, password, refreshToken, name } from "../helpers/joiSchema";
import joi from 'joi'

export const register = async (req, res)=>{
    try {
        // const {error} = joi.object({email, password, name}).validate({...req.body})
        // if(error) return badRequest(error.details[0]?.message, res)
        const response = await services.register(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const login = async (req, res)=>{
    try {
        const {error} = joi.object({email, password}).validate(req.body)
        if(error) return badRequest(error.details[0]?.message, res)
        const response = await services.login(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const refreshTokenCtrl = async (req, res)=>{
    try {
        const {error} = joi.object({refreshToken}).validate(req.body)
        if(error) return badRequest(error.details[0]?.message, res)
        const response = await services.refreshToken(req.body.refreshToken)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}