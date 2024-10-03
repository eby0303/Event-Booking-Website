const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const decorRoutes = require('./routes/decorRoutes');
const hallRoutes = require('./routes/hallRoutes');
const cateringRoutes = require('./routes/cateringRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/decor', decorRoutes); // Decor routes
app.use('/api/hall', hallRoutes); // Hall routes
app.use('/api/catering', cateringRoutes); // Catering routes

// Simple health check route
app.get('/', (req, res) => {
    res.send('Backend is running locally...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
