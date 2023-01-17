import express from 'express'
import { getProducts } from '../controller/productController.js'
import { userSignup, userLogin } from '../controller/userController.js'
const router = express.Router()


router.post('/signup', userSignup)
router.post('/login', userLogin)
router.get('/products', getProducts)


export default router