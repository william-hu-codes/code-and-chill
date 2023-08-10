const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PatientSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
        min: 0,
    },
    fluid: {
        type: Schema.Types.ObjectId,
        ref: "Fluid"
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Patient", PatientSchema)