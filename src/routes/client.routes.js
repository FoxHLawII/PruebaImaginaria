const router = require('express').Router();

const OrderService = require('../services/order.service');

router.post('/orders/:idClient', async(req, res) => {
    const idClient = req.params['idClient'];
    new OrderService().createAndAssignDriver(idClient, req.body)
        .then((createdOrder) => {
            res.json({
                status: 'ok',
                data: createdOrder
            });
        }).catch(err => {
            res.json({
                status: 'error',
                data: err.errors
            });
        });
});

module.exports = router;