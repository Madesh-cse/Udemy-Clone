const express = require('express');

const router = express.Router()

// only the instructor can acess

router.get('/instructor',(req,res)=>{
    res.json({message:'Welcome Insctructor'})
})

// both user and Instructor can acess

router.get('/user', (req,res)=>{
    res.json({message: 'Welcome User'})
})

module.exports = router