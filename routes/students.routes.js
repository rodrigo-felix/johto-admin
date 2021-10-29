const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Students = require('../models/Students.model');

const router = Router();

// get all students

router.get('/students', async (req, res) => {
    try {
        const students = await Students.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ msg: 'ServerError', error });
    }
});

// get specifc student

router.get('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const students = await Students.findById(id);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ msg: 'ServerError', error });
    }
});

// post new students (PUSH in a CLASSROOM)

router.post('/students', async (req, res) => {
    if (!req.body.title) {
      return res.status(400).json({ msg: 'missing title field' });
    }
    try {
      const newClassroom = await Students.create(req.body);
      return res.status(201).json(Students);
    } catch (error) {
      return res.status(500).json({ msg: 'ServerError', error });
    }
  });

// edit specifc classroom

router.put('/students/:id', async (req, res) => {
    const { id } = request.params;
    const payload = request.body;
    try {
      const updatedStudents = await Students.findOneAndUpdate({ _id: id }, payload, { new: true });
      response.status(200).json(updatedStudents);
    } catch (error) {
      response.status(500).json({ msg: 'Error while updating joke', error });
    }
  });

// delete specific classroom

router.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Classroom.findByIdAndDelete(id);
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ msg: 'Error while deleting joke', error });
    }
  });

module.exports = router;