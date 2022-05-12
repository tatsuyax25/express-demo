const express = require('express');
const app = express();

app.use(express.json());

// Adding new courses
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

// This is the home page
app.get('/', (req, res) => {
    res.send('Hello World');
});

// This is a second page
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Use the POST here to make a new post.
app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    course.push(course);
    res.send(course);
});

// /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found.'); // 404
    res.send(course);
});

// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));