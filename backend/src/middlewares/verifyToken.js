import jwt, { TokenExpiredError } from "jsonwebtoken";
import { notAuth } from "./handleError";

const verifyToken = (req, res, next) =>{
    const token = req.headers.authorization
    if(!token) return notAuth('Require authorization', res)
    const accessToken = token.split(' ')[1]
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, user)=>{
        if(err){
            const isChecked = err instanceof TokenExpiredError
            if(!isChecked) return notAuth('AccesToken invalid', res, isChecked)
            if(isChecked) return notAuth('Phiên bản đã hết hạn. \nVui lòng đăng nhập lại.', res, isChecked)
        }
        
        
        req.user = user
        next()
    })
}

export default verifyToken