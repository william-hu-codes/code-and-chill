const mongoose = require('mongoose')

const Schema = mongoose.Schema



const fluidSchema = new Schema({
    brand: {
        type: String,
    },
    potassium: {
        type: Boolean
    },
    phos: {
        type: Boolean
    }
}, {
    timestamps: true 
}
);


module.exports = mongoose.model('Fluid', fluidSchema)