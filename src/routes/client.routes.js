const OrderService = require('../services/order.service');

module.exports = (app) => {
    app.post('/orders/:idClient', async(req, res) => {
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
}