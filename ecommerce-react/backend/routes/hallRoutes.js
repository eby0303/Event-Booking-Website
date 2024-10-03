const express = require('express');
const router = express.Router();
const Hall = require('../models/Hall');

// Get all halls
router.get('/', async (req, res) => {
    try {
        const halls = await Hall.find();
        res.json(halls);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific hall by ID
router.get('/:id', async (req, res) => {
    try {
        const hall = await Hall.findById(req.params.id);
        if (!hall) return res.status(404).json({ message: 'Hall not found' });
        res.json(hall);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new hall
router.post('/', async (req, res) => {
    const hall = new Hall(req.body);
    try {
        const savedHall = await hall.save();
        res.status(201).json(savedHall);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
