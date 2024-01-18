const express = require('express')
const { registerController, logInUser } = require('../contollers/authController')


const router = express.Router()


// register user API
router.post('/register', registerController)
router.get('/login', logInUser)

module.exports = router