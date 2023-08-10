//  connection string - .env

require('dotenv').config()

// db - connection
require('./database')

// import model - MOVIE
const Fluid = require('../models/fluid')


const dataOne = {
    brand: "prismasol",
    potassium : true,
    phos: false
}



const dataTwo = {
    brand: "prismasol",
    potassium : false,
    phos: false
}


async function addOneFluid (data){
    try {
        const addFluid = await Fluid.create(data)

        console.log(addFluid)

    }catch(err){
        console.log(err)
    }
}

async function find () {

    try {
        const allFluids = await Fluid.find({})
        console.log(allFluids)
    } catch(err) {
        console.log(err)
    }
}


addOneFluid(dataTwo)
find()


