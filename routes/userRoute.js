const express = require("express");
const { addUserController, getUserController, updateUserController, deleteUserController } = require("../controller/userController");

//router object
const router = express.Router();

//ADD USER || METHOD POST
router.post('/adduser',addUserController);


//GET USER || METHOD GET
router.get('/getuser',getUserController);


//UPDATE USER || METHOD PUT
router.put('/updateuser/:id',updateUserController);


//DELETE USER || METHOD DELETE
router.delete('/deleteuser/:id',deleteUserController);



module.exports = router;