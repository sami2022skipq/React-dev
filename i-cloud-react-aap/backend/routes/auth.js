const express = require('express')

const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const router = express.Router()
const jwt = require('jsonwebtoken')

const fetchuser = require('../middleware/fetchuser')


// ROUTE 1:Create user using POST "/api/auth/createUser". No login required
const JWt_secret = "mySecretSAMI"
router.post('/createUser', [

    // Basic critaria for creating a new user
    body('name', "Name should be atleast three characters").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Minimum password length has to be five characters ").isLength({ min: 5 }),

], async (req, res) => {
    let success = false
    // if there is an error return bad req 400, and erros
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    // check weathere user with this email already exsist or not 
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            
            return res.status(400).json({success, error: `User with email '${user.email}' already exsist` })
        }
        // generating password hash for user, 
        let salt = bcrypt.genSaltSync(10)
        let secPass = bcrypt.hashSync(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        //Enabling JWT auth token 
        const data = {
            user: {
                id: user.id,

            }
        }
        const authToken = jwt.sign(data, JWt_secret)
        success= true
        res.json({success,  authToken })
    } catch (error) {
        console.log("here is the error ", error.message)
        res.status(500).send("Internal Server error ")

    }

})

// ROUTE 2: Uthenticate a user uding POST /api/auth/login : No login required

router.post('/login', [

    // Basic critaria for creating a new user
    body('email', "Enter a valid email").isEmail(),
    body('password', "Minimum password length has to be five characters ").isLength({ min: 5 }),

], async (req, res) => {
    let success= false

    // if there is an error return bad req 400, and erros
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email })
        if (!user) {
            
            return res.status(400).json({ success, error: `Please login with correct credentials ` })
        }
        let passwordCompare = bcrypt.compareSync(password, user.password)
        if (!passwordCompare) {
         
            return res.status(400).json({ success, error: `Please login with correct credentials` })
        }

        // Using JWT token and JWT_secret  
        const data = {
            user: {
                id: user.id,


            }
        }
        const authToken = jwt.sign(data, JWt_secret)
        // console.log(authToken)
        success= true
        res.json({success, authToken })
    } catch (error) {
        console.log("here is the error ", error.message)
        res.status(500).send("Internal Server error ")


    }


})


//ROUTE 3 : Get user detail using authentication token POST /api/auth/getuser : Login required

router.post('/getuser', fetchuser, async (req, res) => {
    try {

        const userId = req.user.id   // geting userId from fetchuser
        const user = await User.findById(userId).select("-password")
        res.send(user)




    } catch (error) {

        console.log("here is the error ", error.message)
        res.status(500).send("Internal Server error ")
    }



})




module.exports = router