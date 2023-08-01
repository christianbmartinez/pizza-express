const router = require('express').Router();
const userRoutes = require('../api/user-routes.js');

router.use('/users', userRoutes)

module.exports = router;