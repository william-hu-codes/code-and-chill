var express = require('express');
var router = express.Router();
const patientsCtrl = require("../controllers/patients")

router.get("/patients/new", patientsCtrl.new)

module.exports = router;