const express = require('express');
const router = express.Router();
const Catering = require('../models/Catering');

// Get all catering services
router.get('/', async (req, res) => {
    try {
        const cateringServices = await Catering.find();
        res.json(cateringServices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific catering service by ID
router.get('/:id', async (req, res) => {
    try {
        const catering = await Catering.findById(req.params.id);
        if (!catering) return res.status(404).json({ message: 'Catering not found' });
        res.json(catering);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new catering service
router.post('/', async (req, res) => {
    const catering = new Catering(req.body);
    try {
        const savedCatering = await catering.save();
        res.status(201).json(savedCatering);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
