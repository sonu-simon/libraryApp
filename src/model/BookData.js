const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user1:user1@library.oyj8f.mongodb.net/LibraryApp?retryWrites=true&w=majority');
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