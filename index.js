const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// API Route for Service 1
app.get('/service1', (req, res) => {
    res.json({ message: 'This is Service 1' });
});

// API Route for Service 2
app.get('/service2', (req, res) => {
    res.json({ message: 'This is Service 2' });
});

// Default API Gateway Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API Gateway!' });
});

app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
