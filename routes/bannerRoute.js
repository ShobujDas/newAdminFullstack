const express = require("express");




const multer = require('multer');
const { addBannerController, getBannerController, updateBannerController, deleteBannerController } = require("../controller/bannerController");

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
router.post('/addbanner',upload.single('myFile'),addBannerController);


//GET USER || METHOD GET
router.get('/getbanner',getBannerController);


//UPDATE USER || METHOD PUT
router.put('/updatebanner/:id',updateBannerController);


//DELETE USER || METHOD DELETE
router.delete('/deletebanner/:id',deleteBannerController);



module.exports = router;