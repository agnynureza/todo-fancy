var express = require('express');
var router = express.Router();
const {signInFb} = require('../controllers/users')

router.post('/signinFb',signInFb)

module.exports = router;
