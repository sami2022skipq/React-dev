const express = require('express')
const User = require('../models/User')
const { body ,validationResult} = require('express-validator');
const router = express.Router()

router.post('/', [
    body('name').isLength({min:3}),
    body('email', "Enter a valid email").isEmail(),
    body('password').isLength({min:5}),
    



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


    // console.log(req.body)
    // // res.send("hellow from auth") 
    // const user = User(req.body)
    // user.save()
    // res.send(req.body)
    
})


module.exports = router