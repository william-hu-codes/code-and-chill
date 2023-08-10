const Fluid = require('../models/fluid')

module.exports = {
    new: newPatient
}

function newPatient(req, res, next) {
        res.render("patients/new")
}