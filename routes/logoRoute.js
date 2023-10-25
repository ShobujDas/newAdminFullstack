const express = require("express");
const { addLogoController, getLogoController, updateLogoController ,deleteLogoController, logoPhotoController} = require("../controller/logoController");



const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname);
    }
  })

  const upload = multer({storage:storage})

//router object
const router = express.Router();

//ADD USER || METHOD POST
router.post('/addlogo',upload.single('myFile'),addLogoController);


//GET USER || METHOD GET
router.get('/getlogo',getLogoController);


//UPDATE USER || METHOD PUT
router.put('/updateuser/:id',updateLogoController);


//DELETE USER || METHOD DELETE
router.delete('/deletelogo/:id',deleteLogoController);

//get photo 
router.get("/get-image/:pid",logoPhotoController)

module.exports = router;