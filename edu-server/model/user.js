const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new  Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required:true,
        enum : ["instructor","user"]
    },
    status:{
        type:String,
        default:'I am new User'
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('User',UserSchema)