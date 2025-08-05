const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    courseSub:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    language:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required: true
    },
    catogory : {
        type: String,
        required:true,
    },
    path:{
        type:String,
        required: true
    },
    filename:{
        type:String,
        required: true
    },
    instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true,
    },
    courseInstruction:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"CourseInstruction",
        required: false,
    }

},{
    timestamps:true,
}
)

module.exports = mongoose.model("Course",courseSchema)
