const router = require('express').Router();
const userRoutes = require('../api/user-routes.js');

router.use('/', userRoutes);

module.exports = router;