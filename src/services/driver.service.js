const utilsDate = require('../utils/date');
const Driver = require('../models/driver');
const Order = require('../models/order');

class DriverService {
    countDrivers() {
        return Driver.count({}).exec();
    }

    async getRandomDriver() {
        const quantity = await this.countDrivers();
        const randomIndex = Math.floor(Math.random() * quantity);
        return Driver.find({}, '_id', { limit: 1, skip: randomIndex }).exec();
    }

    updateDriver(id, driver) {
        return Driver.findByIdAndUpdate(id, { "$push": { "orders": driver.orders } }).exec();
    }

    async getOrdersByIdAndDate(idDriver, date) {
        let orders = [];
        const requiredDate = new Date(date);
        const toCompareDate = utilsDate.addDays(date, 1);
        await Driver.findOne({ _id: idDriver }).then(async(driver) => {
            orders = await Order.find({ _id: { $in: driver.orders }, date: { $gte: requiredDate, $lt: toCompareDate } }).exec();
        }).catch(() => { return });
        return orders
    }
}

module.exports = DriverService;