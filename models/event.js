const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: String,
    description: String,
    postDate: Date
});
module.exports = mongoose.model('Event', EventSchema);