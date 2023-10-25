const mongoose = require('mongoose');

const logoSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        required:true,
    },
 
},{ timestamps: true });

const LogoModel = mongoose.model('logomodel',logoSchema);


module.exports = LogoModel;








