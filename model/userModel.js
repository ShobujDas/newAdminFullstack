const mongoose = require('mongoose');

const addUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        trim:true,
    },
    role:{
        type:Number,
        default:0
     },
    password:{
        type:String,
        required:true,  
    },
},{ timestamps: true });

const UserModel = mongoose.model('usermodel',addUserSchema);


module.exports = UserModel;
























