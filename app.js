const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('sections/about');
});
app.get('/events', (req, res) => {
    res.render('sections/events');
});
app.get('/contact', (req, res) => {
    res.render('sections/contact');
});
app.get('/gallery', (req, res) => {
    res.render('sections/gallery');
});

app.listen(3000, () => {
    console.log('serving on port 3000');
})