

const LogoModel = require("../model/logoModel");





exports.addLogoController = async(req,res)=>{
    try {
        const image = (req.file) ? req.file.filename : null;
        const {name} = req.body;

        // console.log(image)
        // console.log(name)
        // console.log(req.file)
        // console.log(req.body)
       const data = await new LogoModel({
        image,
        name,
      }).save();

      res.status(200).send({
        success:true,
        message:"successfull logo Adding",
        data
      })
      
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Adding Logo", 
            error

        })
        
    }
}


//get agent points

exports.getLogoController = async (req,res)=>{
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
exports.updateLogoController = async (req,res)=>{
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
