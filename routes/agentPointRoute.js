const express = require('express');
const {addAgentPoint, getAgentPoint, updateAgentPoint, deleteAgentPoint,} = require('../controller/agentPointContoller')

const router = express.Router();

//POST POINTS || METHOD POST
router.post('/addpionts',addAgentPoint)

//GET POINTS || METHOD GET
router.get('/getpionts',getAgentPoint)

//UPDATE POINTS || METHOD UPDATE
router.put('/updatepionts/:id',updateAgentPoint)

//DELETE POINTS || METHOD DELETE
router.delete('/deletepionts/:id',deleteAgentPoint)


module.exports = router












