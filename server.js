const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/signup', (req, res) => {
    const { firstName, lastName, country, whatsapp, email, password } = req.body;
    // Here you can handle the signup logic (e.g., save to database)
    console.log(req.body);
    res.redirect('/welcome');
});

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
