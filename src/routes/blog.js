const express = require('express');
const router = express.Router();

const blogController = require('../app/controllers/BlogController');

router.use('/:slug', blogController.Show);

module.exports = router;