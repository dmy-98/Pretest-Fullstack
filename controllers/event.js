const { Event } = require('../models/event')
const { Ticket } = require('../models/ticket')

class EventController {
    static async getEvent(req, res, next) {
        try {
            const event = await Event
                .find()
                .select(['-createdAt', '-updatedAt'])
                .populate({ path: 'location', select: ['-createdAt', '-updatedAt'] })
                .populate({ path: 'tickets', select: ['-createdAt', '-updatedAt'] });

            res.status(200).json({
                "success": "true",
                "message": "Successfully showing all Event!",
                "data": event
            });
        } catch (err) {
            next(err);
        }
    };

    static async createEvent(req, res, next) {
        try {
            const { name, location, startTime, endTime } = req.body;
            let obj = {};
            obj.name = name;
            obj.location = location;
            obj.startTime = new Date(startTime);
            obj.endTime = new Date(endTime);

            const event = await Event
                .create(obj)
                .select(['name', 'city']);

            res.status(200).json({
                "success": "true",
                "message": "Successfully create Event!",
                "data": event
            });
        } catch (err) {
            next(err);
        }
    }

    static async createTicket(req, res, next) {
        try {
            const { type, quantity, price, eventId } = req.body;
            let obj = {};

            obj.type = type;
            obj.quantity = quantity;
            obj.price = price;

            const ticket = await Ticket.create(obj);
            const event = await Event
                .findByIdAndUpdate(eventId, { $push: { tickets: ticket } }, { new: true })
                .select('name')
                .populate({ path: 'tickets', select: ['-createdAt', '-updatedAt'] });

            res.status(200).json({
                "success": "true",
                "message": "Successfully create ticket!",
                "data": event
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = EventController;