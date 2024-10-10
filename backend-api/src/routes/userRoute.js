const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()


module.exports.setup = (app) => {
    
    app.use('/api/v1/users', router)

    // router.get('/', userController.getAllUsers)

    router.post('/signup', userController.signup)

    router.post('/signin', userController.signin)

    router.get('/', userController.userData)
}