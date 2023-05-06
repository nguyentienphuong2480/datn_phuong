import * as controllers from '../controllers'
import express from 'express'

const router = express.Router()

router.get('/product', controllers.insertProduct)
router.get('/brand', controllers.insertBrand)
router.get('/productdetail', controllers.insertProductDetail)

module.exports = router