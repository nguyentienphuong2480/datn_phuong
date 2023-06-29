// import * as controllers from '../controllers'
// import express from 'express'
// import verifyToken from '../middlewares/verifyToken'
// import {isAdmin} from '../middlewares/verifyRoles'

// const router = express.Router()

// router.get('/',controllers.getBrand)

// router.use(verifyToken)
// router.use(isAdmin)
// router.post('/',controllers.addCategory)
// router.post('/editCategory',controllers.EditCategory)
// router.get('/getOneCategory/:id',controllers.getOneCategory)
// router.get('/trash',controllers.getTrash)
// router.put('/',controllers.trashCategory)


// module.exports = router

import * as controllers from '../controllers'
import express from 'express'
import verifyToken from '../middlewares/verifyToken'
import {isAdmin} from '../middlewares/verifyRoles'
import uploadCloud from '../middlewares/upload'

const router = express.Router()

router.get('/',controllers.getAllBrand)

router.use(verifyToken)
router.use(isAdmin)
router.post('/', uploadCloud.single('image'), controllers.addBrand)
router.get('/getOneBrand/:id', controllers.getOneBrand)
router.put('/', uploadCloud.single('image'), controllers.editBrand)
router.get('/trash', controllers.getTrashBrand)
router.put('/trash', controllers.changeTrashBrand)



module.exports = router