const express = require('express')
const User = require('../models/User')
const { query ,validationResult} = require('express-validator');
const router = express.Router()

router.post('/', query('name').notEmpty(), (req, res) => {
    res.send(`Hello, ${req.query.person}!`);
    const result = validationResult(req);
    if (result.isEmpty()) {
        return res.send(`Hello, ${req.query.person}!`);
    }

    res.send({ errors: result.array() });


    /*console.log(req.body)
    res.send("hellow from auth")
    const user = User(req.body)
    user.save()
    res.send(req.body)
    */
})


module.exports = router