const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Classroom = require('../models/Classroom.model');

const router = Router();

// get all classroom

router.get('/classroom/create', (req, res) => {
    res.render('classroom-create'));
}


// get specifc classroom

// post new classroom (PUSH in a CLASSROOM)

// edit specifc classroom

// delete specific classroom

module.exports = router;