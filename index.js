const express = require('express');
const app = express();

// This is the home page
app.get('/', (req, res) => {
    res.send('Hello World');
});

// This is a second page
app.get('/api/courses', (req,res) => {
    res.send([1, 2, 3]);
});

// /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
})

// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));