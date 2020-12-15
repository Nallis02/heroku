const router = require('express').Router();
const models = require('../../models/index.js');
const controller = require('../../controller/controller.js');
const bcrypt = require('bcryptjs');

//api/db/
router.get('/', async(req, res)=>{
    const user = await models.user.findAll();
    res.status(200).json(user);
});
//api/user/register
router.post('/registry', async(req, res)=>{
    req.body.password =  bcrypt.hashSync(req.body.password, 10);
    const user = await models.user.create(req.body);
    res.status(200).json(user);
});
router.post('/signin', controller.signin);
router.post('/registry', controller.signin);

module.exports = router;