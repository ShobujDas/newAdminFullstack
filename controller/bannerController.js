

const BannerModel = require("../model/bannerModel");




//post Banner
exports.addBannerController = async(req,res)=>{
    try {
        const image = (req.file) ? req.file.filename : null;
        const {name} = req.body;

        // console.log(image)
        // console.log(name)
        // console.log(req.file)
        // console.log(req.body)
       const data = await new BannerModel({
        image,
        name,
      }).save();

      res.status(200).send({
        success:true,
        message:"successfull Banner Adding",
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


//get Banner

exports.getBannerController = async (req,res)=>{
  try {
      const data = await BannerModel.find({})

      res.status(200).send({
          success:true,
          message:"Get all banner data",
          total_count:data.length,
          data,
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:"Error in Getting Banner Data",
          error,
      })
      
  }
}


//update Banner
exports.updateBannerController = async (req,res)=>{
  try {
      const data = await BannerModel.findByIdAndUpdate(req.params.id)

      res.status(200).send({
          success:true,
          message:"Update Banner Data",
          total_count:data.length,
          data,
      })
      
  } catch (error) {
      console.log(error)
      res.status(500).send({
          success:false,
          message:"Error in Updating Banner Data",
          error,
      })
      
  }
}




//delete Banner
exports.deleteBannerController = async (req,res)=>{
    try {
        await BannerModel.findByIdAndDelete(req.params.id)
  
        res.status(200).send({
            success:true,
            message:"Delete Banner successfully",
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in deleting Banner data",
            error,
        })
        
    }
  }
  




