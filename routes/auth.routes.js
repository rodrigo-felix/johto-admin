const { Router } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/User.model');

const router = Router();

// signup
router.post('/signup', async (req, res) => {
    const { name, email, role, password } = req.body;
    try {
        if (!name || !email || !role || !password) {
            throw new Error('Missing fields')
    }

    const user = await User.findOne({ email });
    if (!!user) {
        throw new Error('email already exists');
    }

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    await User.create({
        name,
        email,
        role,
        passwordHash
    })
    res.status(201).json({ message: `Created user: ${email}` });
    } catch (error) {
        res.status(500).json({ message: "Error trying to create user", error: error.message})
    }
})

module.exports = router;