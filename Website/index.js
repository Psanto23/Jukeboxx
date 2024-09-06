const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files from the 'Website' directory
app.use(express.static(path.join(__dirname)));

// Serve the login.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`Username: ${username}, Password: ${password}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
