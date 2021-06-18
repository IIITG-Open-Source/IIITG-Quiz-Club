const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Event = require('./models/event');
const { Console } = require('console');

//for making and connecting to database.
mongoose.connect('mongodb://localhost:27017/quiz-club', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error : "));
db.once("open", () => {
    console.log("Database connected");
})

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//get routes for serving specific pages.
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('sections/about');
});
app.get('/events', async (req, res) => {
    const events = await Event.find({});
    res.render('sections/events', { events });
});
app.get('/contact', (req, res) => {
    res.render('sections/contact');
});
app.get('/gallery', (req, res) => {
    res.render('sections/gallery');
});
app.get('/addEvent', (req, res) => {
    res.render('sections/addEvent');
});

app.post('/', async (req, res) => {
    const event = new Event(req.body.event);
    await event.save();
    console.log(event);
    res.redirect(`events`);
});

app.listen(3000, () => {
    console.log('serving on port 3000');
})