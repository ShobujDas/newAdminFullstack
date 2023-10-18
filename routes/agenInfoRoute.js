const express = require('express');
const { addAgentInfo, getAgentIfo, updateAgentInfo, deleteAgentInfo } = require('../controller/agentInfoController');

const router = express.Router();

//POST POINTS || METHOD POST
router.post('/addinfo',addAgentInfo)

//GET POINTS || METHOD GET
router.get('/getinfo',getAgentIfo)

//UPDATE POINTS || METHOD UPDATE
router.put('/updateinfo/:id',updateAgentInfo)

//DELETE POINTS || METHOD DELETE
router.delete('/deleteinfo/:id',deleteAgentInfo)


module.exports = router





