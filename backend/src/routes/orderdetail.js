import * as controllers from '../controllers'
import express from 'express'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()

router.get('/bestsellers', controllers.getBestSellers);
router.get('/:id', controllers.getOneOrder)

router.use(verifyToken)
router.post('/', controllers.addOrderDetail)
module.exports = router