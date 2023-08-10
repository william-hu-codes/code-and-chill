const Fluid = require('../models/fluid')

module.exports = {
    index,
    new: addFluid,
    create
}

async function index (req, res, next) {
    try {
        const allFluids = await Fluid.find()
        res.render("fluids/index", {
            allFluids,
            title: "Fluids List"
        })
        console.log(allFluids)

    } catch(err) {
        console.log(err)
        next(Error(err))
    }
}

function addFluid (req, res, next) {
    res.render("fluids/new")
}

async function create(req, res, next) {
    
}