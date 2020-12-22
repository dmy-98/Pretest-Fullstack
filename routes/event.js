const { Router } = require('express');
const router = Router();
const eventController = require('../controllers/event')

router.get('/get_info', eventController.getEvent);
router.post('/create', eventController.createEvent);
router.post('/ticket/create', eventController.createTicket);


module.exports = router;