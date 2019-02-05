const DriverService = require('../services/driver.service');

module.exports = (app) => {
    app.get('/drivers/:idDriver/:date', async(req, res) => {
        const { idDriver, date } = req.params;
        const orders = await new DriverService().getOrdersByIdAndDate(idDriver, date);
        orders.length === 0 ?
            res.json({ status: "ok", message: "No tiene ninguna orden para hoy" }) :
            res.json({ status: "ok", data: orders });
    });
}