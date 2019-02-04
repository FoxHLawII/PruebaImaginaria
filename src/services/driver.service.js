const Driver = require('../models/driver');

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
}

module.exports = DriverService;