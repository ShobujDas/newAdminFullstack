const mongoose = require('mongoose');
const agentPointSchema = new mongoose.Schema({
    agentId:{
        type:String,
        required:true,
    },
    agentNum:{
        type:String,
        required:true,
    },
    agentName:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    points:{
        type:String,
        required:true,
    },
},{timeseries:true})

const AgentPointModel = mongoose.model("agentpointmodel",agentPointSchema);
module.exports = AgentPointModel;







































