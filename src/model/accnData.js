const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@ictak.6lvlw.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const schema = mongoose.Schema;

//Shema definition - using constructor method (new)
const AccountSchema = new schema({
    email: String,
    // phone: String,
    password: String,
});

var AccountData = mongoose.model('AccountData', AccountSchema);

module.exports = AccountData;