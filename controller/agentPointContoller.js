
const AgentPointModel = require("../model/agentPointModel");

exports.addAgentPoint = async(req,res)=>{
    try {
        const {agentId,agentNum,agentName,date,points} = req.body;
        switch(true){
            case !agentId:
            return res.status(500).send({ error: "agentId is Require" });
          case !agentNum:
            return res.status(500).send({ error: "agentNum is Require" });
          case !agentName:
            return res.status(500).send({ error: "agentName is Require" });
          case !date:
            return res.status(500).send({ error: "date is Require" });
          case !points:
            return res.status(500).send({ error: "points is Require" });
        }

        const agentPoint = await new AgentPointModel({
            agentId,
            agentNum,
            agentName,
            date,
            points 
        }).save();



        res.send({
            success:true,
            message:"successfull adding data",
            agentPoint
        })
        
    } catch (error) {
        console.log(error)
        res.send({
            success:false,
            message:"Error in Adding Points", 
            error

        })
        
    }
}


//get agent points

exports.getAgentPoint = async (req,res)=>{
  try {
      const getPoints = await AgentPointModel.find({})

      res.status(200).send({
          success:true,
          message:"Get all Agent Points data",
          total_count:getPoints.length,
          getPoints,
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:"Error in Getting Agents points",
          error,
      })
      
  }
}


//update agents points
exports.updateAgentPoint = async (req,res)=>{
  try {
      const getPoints = await AgentPointModel.findByIdAndUpdate(req.params.id)

      res.status(200).send({
          success:true,
          message:"Get all Agent Points data",
          total_count:getPoints.length,
          getPoints,
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:"Error in Getting Agents points",
          error,
      })
      
  }
}


//delete agenet point
exports.deleteAgentPoint = async (req,res)=>{
  try {
      await AgentPointModel.findByIdAndDelete(req.params.id)

      res.status(200).send({
          success:true,
          message:"Delete Agent Points data",
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:"Error in deleteing Agents points",
          error,
      })
      
  }
}


