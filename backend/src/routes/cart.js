import * as controllers from '../controllers'
import express from 'express'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()
// PUBLIC ROUTES

// PRIVATE ROUTES
router.use(verifyToken)
router.post('/', controllers.addCart)
router.get('/', controllers.getCart)
router.delete('/all', controllers.deleteAllCart)
router.delete('/', controllers.deleteCart)
router.put('/', controllers.changeQuantityCart)

module.exports = router