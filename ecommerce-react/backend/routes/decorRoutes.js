const express = require('express');
const router = express.Router();
const Decor = require('../models/Decor');

// Get all decors
router.get('/', async (req, res) => {
    try {
        const decors = await Decor.find();
        res.json(decors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific decor by ID
router.get('/:id', async (req, res) => {
    try {
        const decor = await Decor.findById(req.params.id);
        if (!decor) return res.status(404).json({ message: 'Decor not found' });
        res.json(decor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new decor
router.post('/', async (req, res) => {
    const decor = new Decor(req.body);
    try {
        const savedDecor = await decor.save();
        res.status(201).json(savedDecor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
