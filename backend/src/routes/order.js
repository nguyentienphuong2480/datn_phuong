import * as controllers from '../controllers'
import express from 'express'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()

router.get('/all', controllers.getOrder)

router.use(verifyToken)
router.post('/', controllers.addOrder)
router.get('/', controllers.getAllOrder)
module.exports = router