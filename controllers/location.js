const { Location } = require('../models/location')

class LocationController {
    static async getLocation(req, res, next) {
        try {
            const location = await Location
                .find()
                .select(['-createdAt', '-updatedAt']);

            res.status(200).json({
                "success": "true",
                "message": "Successfully showing all location!",
                "data": location
            });
        } catch (err) {
            next(err);
        }
    };

    static async createLocation(req, res, next) {
        try {
            const { name, city } = req.body;
            let obj = {};
            obj.name = name;
            obj.city = city;
            const location = await Location
                .create(obj)

            res.status(200).json({
                "success": "true",
                "message": "Successfully create location!",
                "data": location
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = LocationController;