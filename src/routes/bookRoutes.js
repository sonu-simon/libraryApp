const express = require('express');
const booksRouter = express.Router();
const BookData = require('../model/BookData');

function router(nav) {
    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbara',
    //         genre: 'Cartoon',
    //         img: 'tom.jpg'
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fantasy',
    //         img: 'harry.jpg'
    //     },
    //     {
    //         title: 'Jobs',
    //         author: 'Steve Jobs',
    //         genre: 'Biography',
    //         img: 'jobs.jpg'
    //     },
    // ]


    booksRouter.get('/', function (req, res) {
        BookData.find()
            .then(function (books) {
                res.render("books", {
                    nav,
                    title: 'Books',
                    books
                });
            });

    });

    booksRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        BookData.findOne({ _id: id })
            .then(function (book) {
                res.render('book', {
                    nav,
                    title: 'Books',
                    book
                });
            });

    });

    return booksRouter;
}


module.exports = router;