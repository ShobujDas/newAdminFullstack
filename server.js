const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./config/bd');
const userRoute = require('./routes/userRoute');
const agentPointRouter = require('./routes/agentPointRoute');






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

//routes
app.use('/api/v1/user',userRoute)
app.use('/api/v1/agentpoint',agentPointRouter)



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













