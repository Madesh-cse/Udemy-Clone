const express = require('express')
const mongoose = require('mongoose')

const app = express()
const authrouter = require('./routes/auth');
const userRouter = require('./routes/userRoute')
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});


app.use('/auth',authrouter);
app.use('/userAuth',userRouter)

app.use((req, res) => {
  res.status(404).send('Route not found: ' + req.originalUrl);
});

mongoose.connect('mongodb+srv://madesh10cse:INSr20go9yV263fu@e-learning-platform.mhnqgwz.mongodb.net/user?retryWrites=true&w=majority&appName=E-Learning-Platform',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: { w: "majority" }
})
.then(result=>{
    app.listen(8080,()=>{
    console.log('✅ Server is running on http://localhost:8080')
})
})
.catch(err=>{
    console.log(err)
})

