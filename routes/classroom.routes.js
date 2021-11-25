const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Classroom = require('../models/Classroom.model');

const router = Router();

// get all classroom

router.get('/', async (req, res) => {
    try {
        const classroom = await Classroom.find();
        res.status(200).json(classroom);
    } catch (error) {
        res.status(500).json({ msg: 'ServerError', error });
    }
});

// get specifc classroom

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const classroom = await Classroom.findById(id);
        res.status(200).json(classroom);
    } catch (error) {
        res.status(500).json({ msg: 'ServerError', error });
    }
});

// post new classroom (PUSH in a CLASSROOM)

router.post('/', async (req, res) => {
    if (!req.body.title) {
      return res.status(400).json({ msg: 'missing title field' });
    }
    try {
      const newClassroom = await Classroom.create(req.body);
      return res.status(201).json(newClassroom);
    } catch (error) {
      return res.status(500).json({ msg: 'ServerError', error });
    }
  });

// edit specifc classroom

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
      const updatedClassroom = await Classroom.findOneAndUpdate({ _id: id }, payload, { new: true });
      res.status(200).json(updatedClassroom);
    } catch (error) {
      res.status(500).json({ msg: 'Error while updating joke', error });
    }
  });

// delete specific classroom

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Classroom.findByIdAndDelete(id);
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ msg: 'Error while deleting joke', error });
    }
  });

module.exports = router;