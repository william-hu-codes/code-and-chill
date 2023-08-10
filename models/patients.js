const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PatientSchema = new Schema({
    name: {
        type: String
    },
    dob: {
        type: Date,
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