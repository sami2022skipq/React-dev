const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{

    obj = {
        name: "sami",
        notes :'asm',
        age : 31
    }
    res.send(obj)
})


module.exports = router