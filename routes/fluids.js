// route starts with /fluids

var express = require('express');
var router = express.Router();

const fluidsCtrl = require('../controllers/fluids')

router.get('/', fluidsCtrl.index)

router.get("/new", fluidsCtrl.new)

router.post("/", fluidsCtrl.create)


module.exports = router;