const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid');

const transactionSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        required: [true, 'Please enter your name!']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email!'],
        lowercase: true,
        match: [/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, `Email format is incorrect!`]
    },
    eventId: {
        type: String,
        ref: "Event",
        required: [true, 'Please fill the event id!']
    },
    ticket: [{
        type: Object,
        ref: 'Ticket',
        required: [true, 'Please enter the ticket id!']
    }],
    total: {
        type: Number
    }
}, { timestamps: true, versionKey: false });

exports.Transaction = mongoose.model("Transaction", transactionSchema);