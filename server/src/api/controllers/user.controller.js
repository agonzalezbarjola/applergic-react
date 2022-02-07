const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const { setError } = require("../../utils/errors/error");
const { generateSign, verifyJwt } = require('../../utils/jwt/jwtUtils')

const postNewUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body)
        const userDuplicate = await User.findOne({ email: newUser.email })
        if (userDuplicate) {
            return next(setError(404, 'Email existente'))
        }
        if (req.file) {
            newUser.image = req.file.path;
          }
        const userDB = await newUser.save()
        return res.status(201).json({ userID: userDB._id })

    } catch (error) {
        return next(setError (500, 'No se ha podido registrar'))
    }
}

const loginUser = async (req, res, next) => {
    try {
        const userDB = await User.findOne({ email: req.body.email })
        if (!userDB) {
            return next(setError(404, 'User not found'))
        }
        if (bcrypt.compareSync(req.body.password, userDB.password)) {
            const token = generateSign(userDB._id, userDB.email)
            return res.status(200).json(token)
        }
    } catch (error) {
        error.message = 'error Login'
        return next(setError (500, 'No se ha podido logear'))
    }
}

const logoutUser = (req, res, next) => {
    try {
        const despedida = 'Bye Bye'
        const token = (null);
        return res.status(200).json({token:token, message: despedida})
    } catch (error) {
        return next(error)
    }
}

const getUser = async (req, res, next) => {
    try {
        const { id } = req.params
      
        const userDB = await User.findById(id)
        if (!userDB) {
            return next(setError(404, 'User not found'))
        }
        return res.status(200).json({ userDB: userDB })

    } catch (error) {
        return next(setError(404, 'User server fail'))
    }
}

module.exports = {
    postNewUser, loginUser, logoutUser, getUser }