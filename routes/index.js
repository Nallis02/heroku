const router = require('express').Router();
const apiUserRouter = require('./api/users.js');

router.use('/auth', apiUserRouter);


module.exports = router;
