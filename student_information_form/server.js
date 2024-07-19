const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Add this line

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Student_Information', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Define the schema and model
const formSchema = new mongoose.Schema({
    name: {
        type: String
    },
    roll: {
        type: Number
    },
    branch: {
        type: String
    },
    email: {
        type: String
    },
    whatapp: {
        type: Number
    }
});

const Form = mongoose.model('Form', formSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'))); // Updated to use path

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, roll, branch, email, whatapp } = req.body;
    console.log('Received form data:', req.body);

    const newFormEntry = new Form({ name, roll, branch, email, whatapp});

    newFormEntry.save((err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Failed to save data');
        } else {
            console.log('Data saved successfully');
            res.status(200).send('Data saved successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
