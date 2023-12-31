const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./config/bd');
const userRoute = require('./routes/userRoute');
const agentPointRouter = require('./routes/agentPointRoute');
const agentInfoRouter = require('./routes/agenInfoRoute');
const logoRoute = require('./routes/logoRoute');
const bannerRoute = require('./routes/bannerRoute');






//configure evn
dotenv.config();

//Database config
connectDB()

//rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/public',express.static('public'))

//routes
app.use('/api/v1/user',userRoute)
app.use('/api/v1/agentpoint',agentPointRouter)
app.use('/api/v1/agentinfo',agentInfoRouter)
app.use('/api/v1/logo',logoRoute)
app.use('/api/v1/banner',bannerRoute)



//rest api 
app.get('/',(req,res)=>{
    res.send({
        message:"welcome to Goti Bangla admin panel"
    })
})


//PORT
const PORT = process.env.PORT || 8080;




app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEB_MODE} mode on port ${PORT}`.bgCyan.white)
})













