
const UserModel = require("../model/userModel");

const {hashPassword,comparePassword} = require('../helper/userHelper')
const JWT = require('jsonwebtoken');



exports.addUserController = async (req,res)=>{
    try {
        const { name,address,phone,username,role,password } = req.body;
      
        //validation
        switch (true) {
          case !name:
            return res.status(500).send({ error: "Name is Require" });
          case !address:
            return res.status(500).send({ error: "address is Require" });
          case !phone:
            return res.status(500).send({ error: "phone is Require" });
          case !username:
            return res.status(500).send({ error: "username is Require" });
          case !role:
            return res.status(500).send({ error: "role is Require" });
          case !password:
            return res.status(500).send({ error: "password is Require" });
        }
    
        const UserADD = await new UserModel({
            name,
            address,
            phone,
            username,
            role,
            password
        }).save();
      
        res.status(200).send({
          success: true,
          message: "User Add Created Successfully",
          UserADD,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error in Createing User",
        });
      }
}





exports.getUserController = async (req,res)=>{
    try {
        const getUser = await UserModel.find({})
        .limit(12)
        .sort({creatdAt:-1});

        res.status(200).send({
            success:true,
            message:"All Products",
            total_count:getUser.length,
            getUser,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Getting User",
            error,
        })
        
    }
}












exports.updateUserController = async (req,res)=>{
    try {
      const { name,address,phone,username,role,password } = req.body;
      const {id} = req.params;
      //validation
      switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Require" });
        case !address:
          return res.status(500).send({ error: "address is Require" });
        case !phone:
          return res.status(500).send({ error: "phone is Require" });
        case !username:
          return res.status(500).send({ error: "username is Require" });
        case !role:
          return res.status(500).send({ error: "role is Require" });
        case !password:
          return res.status(500).send({ error: "password is Require" });
      }
  
      const UserADD = await new UserModel.findByIdAndUpdate(id,{
          name,
          address,
          phone,
          username,
          role,
          password
      },{new:true}).save();
    
      res.status(200).send({
        success: true,
        message: "User Updated Successfully",
        UserADD,
      });
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Getting User",
            error,
        })
        
    }
}






exports.deleteUserController = async (req,res)=>{
    try {
      console.log(req.params)
      const {id} = req.params;
      await UserModel.findByIdAndDelete(id)

      res.status(200).send({
            success:true,
            message:"user Deleted successfully",
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Getting User",
            error,
        })
        
    }
}










