const AllergenRoutes = require('express').Router()
const { isAuth } = require('../../middleware/auth')
const {  getAllergens } = require('../controllers/allergen.controller')

AllergenRoutes.get('/allergens', [isAuth], getAllergens)


module.exports = AllergenRoutes;