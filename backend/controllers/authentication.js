const router = require('express').Router();
const db = require('../models');
const bcrypt = require('bcrypt');

const { User } = db;

router.post('/', (req, res) => {
    console.log('In here')
})

module.exports = router;