const express = require('express');
const router = express.Router();
const FAQController = require('./faq.controller');

router.get('/', FAQController.getFAQs);

module.exports = router;