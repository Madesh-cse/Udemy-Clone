const express = require('express');
const router = express.Router();
const { body } = require('express-validator')

const authController = require('../controllers/auth');
const User = require('../model/user');

router.post('/signup',[
    body('email')
     .isEmail()
     .withMessage('Please enter the Valid Email')
     .custom((value)=>{
        return User.findOne({email:value}).then(userDoc=>{
            if(userDoc){
                return Promise.reject('Email Already Exist')
            }
        })
     })
     .normalizeEmail(),

    body('password')
     .trim()
     .isLength({min: 6})
     .withMessage('Password must be atleast 6 character'),

    body('name')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Must not to be empty')
], authController.SignUp)

router.post('/login', authController.Login)

module.exports = router
