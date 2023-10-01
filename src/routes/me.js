const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/blog', meController.storedBlog);
router.get('/trash/blog', meController.trashdBlog);


module.exports = router;