const express = require('express')

const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const router = express.Router()

// Create user using POST "/api/auth/createUser". No login required

router.post('/createUser', [

    // Basic critaria for creating a new user
    body('name', "Name should be atleast three characters").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Minimum password length has to be five characters ").isLength({ min: 5 }),




], async (req, res) => {
    // if there is an error return bad req 400, and erros
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    // check weathere user with this email already exsist or not 
    try {



        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: `User with email '${user.email}' already exsist` })
        }

        let salt = bcrypt.genSaltSync(10)
        let secPass =   bcrypt.hashSync(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        res.json(user)
    } catch (error) {
        console.log("here is the error " ,error.message)
        res.status(500).send("some error has occourd ")

    }
    // .then(user=>res.json(user))
    // .catch(err=>{
    //     console.log(err)
    //     res.json({
    //         error: "Please enter a valid email adress", message: err.message
    //     })

    // })


    // console.log(req.body)
    // // res.send("hellow from auth") 
    // const user = User(req.body)
    // user.save()
    // res.send(req.body)

})


module.exports = router