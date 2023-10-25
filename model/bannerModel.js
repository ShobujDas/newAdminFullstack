const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    name:{
        type:String,
        type:String,
        trim:true,
    },
    image:{
        type:String,
        required:true,
    },
 
},{ timestamps: true });

const BannerModel = mongoose.model('bannermodel',bannerSchema);


module.exports = BannerModel;





