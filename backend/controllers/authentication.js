const router = require('express').Router();
const db = require('../models');
const bcrypt = require('bcrypt');

const { User } = db;

router.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.send('user not found')
    } else {
        res.json({ user })
    }
})

module.exports = router;