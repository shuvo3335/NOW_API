// routes.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/laydownprog')

router.get('/data', dataController.getData);

module.exports = router;