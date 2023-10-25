

const LogoModel = require("../model/logoModel");




//post Logo
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


//get Logo

exports.getLogoController = async (req,res)=>{
  try {
      const data = await LogoModel.find({})

      res.status(200).send({
          success:true,
          message:"Get all logo data",
          total_count:data.length,
          data,
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


//update logo
exports.updateLogoController = async (req,res)=>{
  try {
      const data = await LogoModel.findByIdAndUpdate(req.params.id)

      res.status(200).send({
          success:true,
          message:"updated logo data",
          total_count:data.length,
          data,
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:"Error in updating logo data",
          error,
      })
      
  }
}



//delete Logo
exports.deleteLogoController = async (req,res)=>{
  try {
      await LogoModel.findByIdAndDelete(req.params.id)

      res.status(200).send({
          success:true,
          message:"Delete Logo successfully",
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:"Error in deleting logo data",
          error,
      })
      
  }
}
