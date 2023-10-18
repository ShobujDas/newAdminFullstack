const express = require('express');
const {addAgentPoint, getAgentPoint,} = require('../controller/agentPointContoller')

const router = express.Router();

router.post('/addpionts',addAgentPoint)


router.get('/getpionts',getAgentPoint)


module.exports = router












