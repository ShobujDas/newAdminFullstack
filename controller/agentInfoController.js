
const AgentInfoModel = require("../model/agentInfoModel");

exports.addAgentInfo = async(req,res)=>{
    try {
        const {agentId,userName,pass,conPass,fullName,mobile,father,mother,nominee,nomineeRel,nomineeMobile,permanentAddress} = req.body;
        switch(true){
          case !agentId:
            return res.status(500).send({ error: "agentId is Require" });
          case !userName:
            return res.status(500).send({ error: "userName is Require" });
          case !pass:
            return res.status(500).send({ error: "pass is Require" });
          case !conPass:
            return res.status(500).send({ error: "confirm password is Require" });
          case !fullName:
            return res.status(500).send({ error: "fullName is Require" });
          case !mobile:
            return res.status(500).send({ error: "mobile is Require" });
          case !father:
            return res.status(500).send({ error: "father name is Require" });
          case !mother:
            return res.status(500).send({ error: "mother name is Require" });
          case !nominee:
            return res.status(500).send({ error: "nominee name is Require" });
          case !nomineeRel:
            return res.status(500).send({ error: "nominee's relative name is Require" });
          case !nomineeMobile:
            return res.status(500).send({ error: "mother name is Require" });
          case !permanentAddress:
            return res.status(500).send({ error: "nomineeMobile name is Require" });
        }

        const agentInfo = await new AgentInfoModel({
            agentId,
            userName,
            pass,
            conPass,
            fullName,
            mobile,
            father,
            mother,
            nominee,
            nomineeRel,
            nomineeMobile,
            permanentAddress 
        }).save();



        res.send({
            success:true,
            message:"successfull adding Agents information data",
            agentInfo
        })
        
    } catch (error) {
        console.log(error)
        res.send({
            success:false,
            message:"Error in Adding Agents information", 
            error

        })
        
    }
}


//get agent points

exports.getAgentIfo = async (req,res)=>{
  try {
      const getPoints = await AgentInfoModel.find({})

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
          message:"Error in Getting Agents information",
          error,
      })
      
  }
}


//update agents points
exports.updateAgentInfo = async (req,res)=>{
  try {
      const getPoints = await AgentInfoModel.findByIdAndUpdate(req.params.id)

      res.status(200).send({
          success:true,
          message:"Get all Agents information data",
          total_count:getPoints.length,
          getPoints,
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:"Error in Getting Agents information",
          error,
      })
      
  }
}


//delete agenet point
exports.deleteAgentInfo = async (req,res)=>{
  try {
      await AgentInfoModel.findByIdAndDelete(req.params.id)

      res.status(200).send({
          success:true,
          message:"Delete Agents information",
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:"Error in deleting Agents information",
          error,
      })
      
  }
}


