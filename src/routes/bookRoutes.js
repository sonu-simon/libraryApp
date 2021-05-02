const express = require('express');
const booksRouter = express.Router();

function router(nav){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbara',
            genre: 'Cartoon',
            img: 'tom.jpg'
        },
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantasy',
            img: 'harry.jpg'
        },
        {
            title: 'Jobs',
            author: 'Steve Jobs',
            genre: 'Biography',
            img: 'jobs.jpg'
        },
    ]
    
    
    booksRouter.get('/', function (req, res) {
        res.render("books", {
            nav,
            title: 'Books',
            books
        });
    });
    
    booksRouter.get('/:id', function(req,res){
        const id = req.params.id;
        res.render('book',{
            nav,
            title: 'Books',
            book: books[id]
        })
    });

    return booksRouter;
}


module.exports = router;