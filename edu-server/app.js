const express = require('express')
const mongoose = require('mongoose')
const app = express()
const multer = require('multer')
const path = require('path')

const authrouter = require('./routes/auth');
const userRouter = require('./routes/userRoute');
const courseRoute = require('./routes/coursecreation')
const bodyParser = require('body-parser');
require('./discountCron')


const fileStorage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,'images')
  },
  filename:(req,file,cb)=>{
    cb(null,new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  }
})

const fileFilter = (req,file,cb)=>{
  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
    cb(null,true)
  }
  else{
    cb(null,false)
  }
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(bodyParser.json())
app.use(multer({storage:fileStorage,fileFilter:fileFilter}).single('image'));
app.use("/images",express.static(path.join(__dirname,'images')))



app.use('/auth',authrouter);
app.use('/userAuth',userRouter);
app.use('/courseCreation',courseRoute);

app.use((req, res) => {
  res.status(404).send('Route not found: ' + req.originalUrl);
});


mongoose.connect('mongodb+srv://madesh10cse:INSr20go9yV263fu@e-learning-platform.mhnqgwz.mongodb.net/user?retryWrites=true&w=majority&appName=E-Learning-Platform')
.then(result=>{
    app.listen(8080,()=>{
    console.log('✅ Server is running on http://localhost:8080')
})
})
.catch(err=>{
    console.log(err)
})

