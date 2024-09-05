const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route for login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Placeholder for login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Validate login credentials here
    res.send(`Username: ${username}, Password: ${password}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
