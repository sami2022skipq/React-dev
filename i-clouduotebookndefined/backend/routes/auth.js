const express = require('express')
const User = require('../models/User')
const { body ,validationResult} = require('express-validator');
const router = express.Router()

router.post('/', [
    body('name', "Name should be atleast three characters").isLength({min:3}),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Minimum password length has to be five characters ").isLength({min:5}),
    



], (req, res) => {
    // res.send(`Hello, ${req.query.person}!`);
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    
    User.create({
        name: req.body.name,    
        email: req.body.email,
        password: req.body.password,
    }).then(user=>res.json(user))
    .catch(err=>{
        console.log(err)
        res.json({
            error: "Please enter a valid email adress", message: err.message
        })

    })


    // console.log(req.body)
    // // res.send("hellow from auth") 
    // const user = User(req.body)
    // user.save()
    // res.send(req.body)
    
})


module.exports = router