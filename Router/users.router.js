const express = require('express');
const router = express.Router();

const Users = require('../models/users.model');

router.post('/', async (req, res) => {
    const {firstName, lastName, email, company, password} = req.body;
    const user = new Users({
        firstName,
        lastName,
        email,
        company,
        password
    });
    await user.save();
    res.json({
        status:"Ok"
    });
})

router.get('/', async (req,res) => {
    const users = await Users.find();
    res.json({
        users
    });
})

module.exports = router;

