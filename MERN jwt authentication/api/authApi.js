const express = require('express')
const { registerController } = require('../contollers/authController')


const router = express.Router()


// register user API
router.post('/register', registerController)


module.exports = router