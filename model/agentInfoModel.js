const mongoose = require('mongoose');
const agentInformationSchema = new mongoose.Schema({
    agentId:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    pass:{
        type:String,
        required:true,
    },
    conPass:{
        type:String,
        required:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    father:{
        type:String,
        required:true,
    },
    mother:{
        type:String,
        required:true,
    },
    nominee:{
        type:String,
        required:true,
    },
    nomineeRel:{
        type:String,
        required:true,
    },
    nomineeMobile:{
        type:String,
        required:true,
    },
    permanentAddress:{
        type:String,
        required:true,
    },
},{timeseries:true})

const AgentInfoModel = mongoose.model("agentinfomodel",agentInformationSchema);
module.exports = AgentInfoModel;







































