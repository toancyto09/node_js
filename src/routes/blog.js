const express = require('express');
const router = express.Router();

const blogController = require('../app/controllers/BlogController');

router.use('/create', blogController.create);
router.use('/store', blogController.store);
router.use('/:slug', blogController.Show);

module.exports = router;