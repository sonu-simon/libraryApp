const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');
const schema = mongoose.Schema;

//Shema definition - using constructor method (new)
const BookSchema = new schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

var BookData = mongoose.model('BookData', BookSchema);

module.exports = BookData;