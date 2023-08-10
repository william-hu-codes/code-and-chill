const Fluid = require('../models/fluid')

module.exports = {
    index,
    new: addFluid,
    create,
    edit,
    update,
    delete: deleteFluid
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
    console.log("creating new data")
    try {
        const newData = {...req.body}
        newData.potassium = newData.potassium ? true : false
        newData.phos = newData.phos ? true : false
        await Fluid.create(newData)
        res.redirect("/fluids")
    }catch(err) {
        console.log(err)
        next(Error(err))
    }
}


async function edit(req, res, next) {
    try {
        const fluidId = req.params.id
        const fluid = await Fluid.findById(fluidId)
        console.log(fluid)
        res.render("fluids/edit", {
            title: "Update Fluid",
            fluid
        })
    }catch(err) {
        console.log(err)
        next(Error(err))
    }
}

async function update(req, res, next) {
    newData = {...req.body}
    newData.potassium = newData.potassium ? true : false
    newData.phos = newData.phos ? true : false
    try {
        console.log("updating some data")
        const originalData = await Fluid.findById(req.params.id)
        await originalData.updateOne({brand: newData.brand})
        await originalData.updateOne({potassium: newData.potassium})
        await originalData.updateOne({phos: newData.phos})
        await originalData.save()
        // res.send(newData)
        res.redirect(`/fluids/`)
    }catch(err) {
        console.log(err)
        next(Error(err))
    }
}

async function deleteFluid (req, res) {
    try {

        console.log("here is what we will delete ", (req.params.id))

        await Fluid.findByIdAndDelete(req.params.id)

        res.redirect('/fluids');

    }catch(err) {
        console.log(err)
        next(Error(err))
    }
}