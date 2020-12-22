const { Router } = require('express');
const router = Router();
const transactionController = require('../controllers/transaction')

router.get('/get_info', transactionController.getTransaction);
router.post('/purchase', transactionController.purchaseTicket);


module.exports = router;