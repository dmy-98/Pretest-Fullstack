const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json("Welcome to Loket API");
});

const locationRoutes = require('./location');
router.use('/location', locationRoutes);

const eventRoutes = require('./event');
router.use('/event', eventRoutes);

const transactionRoutes = require('./transaction');
router.use('/transaction', transactionRoutes);

module.exports = router;