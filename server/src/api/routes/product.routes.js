const ProductRoutes = require('express').Router()
const { isAuth } = require('../../middleware/auth')
const {  getProduct, getProductByCode } = require('../controllers/product.controller')


ProductRoutes.get('/', [isAuth], getProduct)
ProductRoutes.get('/:code', [isAuth], getProductByCode)


module.exports = ProductRoutes
