const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid');

const locationSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        required: [true, 'Please enter location name!']
    },
    city: {
        type: String,
        required: [true, 'Please enter location city!']
    }
}, { timestamps: true, versionKey: false });

exports.Location = mongoose.model("Location", locationSchema);