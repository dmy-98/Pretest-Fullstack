const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid');

const ticketSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    type: {
        type: String,
        required: [true, 'Please enter ticket type!']
    },
    quantity: {
        type: Number,
        required: [true, 'Please enter ticket quantity!']
    },
    price: {
        type: Number,
        required: [true, 'Please enter the ticket price!']
    }
}, { timestamps: true, versionKey: false });

exports.Ticket = mongoose.model("Ticket", ticketSchema);