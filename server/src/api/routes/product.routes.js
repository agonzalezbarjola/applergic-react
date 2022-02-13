const ProductRoutes = require('express').Router()
const { isAuth } = require('../../middleware/auth')
const {  getProduct } = require('../controllers/product.controller')


ProductRoutes.get('/', [isAuth], getProduct)


module.exports = ProductRoutes
