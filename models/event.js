const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid');

const eventSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        required: [true, 'Please enter event name!']
    },
    location: {
        type: String,
        ref: "Location",
        required: [true, 'Please enter location id!']
    },
    startTime: {
        type: Date,
        required: [true, 'Please fill the start time!']
    },
    endTime: {
        type: Date,
        required: [true, 'Please fill the end time!']
    },
    tickets: [{
        type: String,
        ref: 'Ticket'
    }]
}, { timestamps: true, versionKey: false });

exports.Event = mongoose.model("Event", eventSchema);