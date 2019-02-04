const { ObjectId } = require('mongoose').Types;

const DriverService = require('../services/driver.service');
const Order = require('../models/order');

class OrderService {
    async createAndAssignDriver(idClient, order) {
        return new Order({...order, client: idClient }).save()
            .then(async(order) => {
                const driverService = new DriverService();
                const randomDriver = await driverService.getRandomDriver();
                await driverService.updateDriver(randomDriver[0]._id, { orders: order });
                return order;
            })
            .catch(err => { throw err });
    }

}

module.exports = OrderService;