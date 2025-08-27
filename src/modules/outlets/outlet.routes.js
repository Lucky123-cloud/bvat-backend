const express = require('express');
const router = express.Router();
const OutletController = require('./outlet.controller');

router.get('/', OutletController.getOutlets);

module.exports = router;