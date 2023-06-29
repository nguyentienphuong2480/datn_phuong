import * as controllers from '../controllers'
import {isAdmin} from '../middlewares/verifyRoles'
import verifyToken from '../middlewares/verifyToken'
import express from 'express'
import uploadCloud from '../middlewares/upload'

const router = express.Router()

router.get('/',controllers.getProduct)
router.get('/productbrand/:id',controllers.getProductBrand)
// router.get('/productdetail/:id',controllers.getProDetail)
router.get('/getOneProduct/:id', controllers.getOneProduct)
router.get('/search/:name', controllers.searchProductByName)
router.get('/new', controllers.getNewProduct)

router.use(verifyToken)
router.use(isAdmin)
router.post('/', uploadCloud.single('image'),controllers.creataNewProduct)
router.put('/', uploadCloud.single('image'),controllers.updateProduct)
router.get('/trash', controllers.getTrashProduct)
router.put('/trash', controllers.changeTrashProduct)
router.delete('/', controllers.deleteProduct)


module.exports = router