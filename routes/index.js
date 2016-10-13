var express = require('express');
var router = express.Router();
var auth = require('./auth');
var mailer = require('./mailer');

router.post('/authenticate',auth.authenticate);

module.exports = router;
