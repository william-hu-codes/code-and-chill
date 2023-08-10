
const Fluid = require('../models/fluid')

module.exports = {
    index
}


async function index (req, res) {

    try {
        const allFluids = await Fluid.find({})
        console.log(allFluids)
        res.render("fluids/index", {allFluids})
    } catch(err) {
        console.log(err)
    }
}

