const express = require("express");
const { addUserController, getUserController } = require("../controller/userController");

//router object
const router = express.Router();

//ADD USER || METHOD POST
router.post('/adduser',addUserController);


//GET USER || METHOD GET
router.get('/getuser',getUserController);



module.exports = router;