const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../model/user');
const jwt = require('jsonwebtoken')

exports.SignUp = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation failed',
      errors: errors.array(),
    });
  }

  const { email, password, name } = req.body;

  try {
    const hashedPwd = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      password: hashedPwd,
      name, 
    });

    const result = await user.save();

    res.status(201).json({
      message: 'User created successfully',
      userId: result._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Something went wrong on the server',
      error: err.message,
    });
  }
};

exports.Login = (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password
    let loadedUser;

    User.findOne({email:email})
    .then(user=>{
        if(!user){
            const errors = new Error('No email is please enter the correct email');
            // not authenticated
            errors.statusCode = 401
            throw errors
        }
        loadedUser = user
        return bcrypt.compare(password,user.password)
    })
    .then(isEqual=>{
        if(!isEqual){
            const error = new Error('Wrong Password');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({
            email:loadedUser.email,
            userId : loadedUser._id.toString()
        },'supersecretesecrete',{expiresIn:'8h'})

        res.status(200).json({token: token,userId: loadedUser._id.toString()})
    })
    .catch(err=>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err)
    })

}
exports.getUserInfo = (req,res,next)=>{
  const userId = req.userId;
  User.findById(userId)
  .select('name email')
  .then(user=>{
    if(!user){
      return res.status(404).json({message:'User not found'})
    }
    res.status(200).json({name:user.name,email:user.email})
  })
}
