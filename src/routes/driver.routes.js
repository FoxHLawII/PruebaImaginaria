const router = require('express').Router();
const ENV = process.env;

router.get('/orders/:date', (req, res) => {
    console.log(req.params.date);
});

module.exports = router;