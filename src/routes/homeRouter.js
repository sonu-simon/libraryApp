const express = require('express');

const homeRouter = express.Router();

function router(nav){
    homeRouter.get('/', function(req,res){
        var books = [
            {
                title: 'Tom and Jerry',
                author: 'Joseph Barbara',
                genre: 'Cartoon',
                img: 'tom.jpg'
            },
            {
                title: 'Jobs',
                author: 'Steve Jobs',
                genre: 'Biography',
                img: 'jobs.jpg'
            },
        ]
        res.render('home',{
            nav,
            title: "Featured Books",
            books
        });
    });
    return homeRouter;
}

module.exports = router;