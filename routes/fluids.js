// route starts with /fluids

var express = require('express');
var router = express.Router();

var fluidsCtrl = require('../controllers/fluids')

router.get('/', fluidsCtrl.index)

router.get("/new", fluidsCtrl.new)

router.post("/", fluidsCtrl.create)

router.delete('/:id', fluidsCtrl.delete);


module.exports = router;