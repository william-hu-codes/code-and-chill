var express = require('express');
var router = express.Router();

const fluidsCtrl = require('../controllers/fluids')


router.get('/', fluidsCtrl.index)


module.exports = router;