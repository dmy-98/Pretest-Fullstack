const { Transaction } = require('../models/transaction');
const { Ticket } = require('../models/ticket');

class TransactionController {
    static async getTransaction(req, res, next) {
        try {
            const transaction = await Transaction
                .find()
                .select(['-createdAt', '-updatedAt']);

            res.status(200).json({
                "success": "true",
                "message": "Successfully showing all Transaction!",
                "data": transaction
            });
        } catch (err) {
            next(err);
        }
    };

    static async purchaseTicket(req, res, next) {
        try {
            const { name, email, eventId } = req.body;
            let ticketInput = req.body.ticketType;
            let ticketType = [];
            ticketInput.forEach(el => {
                ticketType.push(el._id);
            });
            let ticket = await Ticket.find({
                "_id": ticketType
            });

            let booked = [],
                failed = [],
                total = 0,
                remain = [];

            ticketInput.forEach((i, index) => {
                ticket.forEach(j => {
                    if (i._id == j._id) {
                        if (i.quantity < j.quantity) {
                            booked.push(index);
                            total += i.quantity * j.price;
                            remain.push(j.quantity - i.quantity);
                        }
                    }
                });
            });

            for (let i = 0; i < ticketInput.length; i++) {
                if ((booked.find(j => j == i)) == undefined) {
                    failed.push(ticketInput[i]);
                }
            }
            ticket = [];
            for (let i of booked) {
                ticket.push(ticketInput[i]);
            }

            if (failed.length > 0) {
                return res.status(400).json({
                    "success": "false",
                    "message": "Failed create transaction!(Not enough slots / ticket type not found)",
                    "data": failed
                });
            }

            let obj = {};
            obj.name = name;
            obj.email = email;
            obj.eventId = eventId;
            obj.ticket = ticket;
            obj.total = total;

            const transactions = await Transaction.create(obj)
            const transaction = await Transaction
                .findById(transactions._id)
                .select(['-createdAt', '-updatedAt'])

            for (let i in booked) {
                console.log(ticketInput[i]._id, remain[i])
                await Ticket.findByIdAndUpdate(ticketInput[i]._id, { $set: { quantity: remain[i] } })
            }
            res.status(200).json({
                "success": "true",
                "message": "Successfully create Transaction!",
                "data": transaction
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = TransactionController;