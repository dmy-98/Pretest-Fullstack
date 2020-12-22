const { Router } = require('express');
const router = Router();
const locationController = require('../controllers/location')

router.get('/', locationController.getLocation);
router.post('/create', locationController.createLocation);


module.exports = router;