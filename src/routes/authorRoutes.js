const express = require('express');
const authorsRouter = express.Router();

function router(nav){
    var authors = [
        {
            author : "Joseph Barbara",
            book : "Tom and Jerry",
            genre : "Cartoon",
            img : "roberto.jpg",
            // about : "Roberto Bolano, in full Roberto Bolaño Ávalos, (born April 28, 1953, Santiago, Chile—died July 15, 2003, Barcelona, Spain), Chilean author who was one of the leading South American literary figures at the turn of the 21st century.His worldwide literary reputation was made with the posthumous publication of his magnum opus, 2666 (2004)."
        },
        {
            author : "J K Rowling",
            book : "Harry Potter",
            genre : "Fantasy",
            img : "bell.jpg",
            // about : "Bell hooks, pseudonym of Gloria Jean Watkins, (born September 25, 1952, Hopkinsville, Kentucky, U.S.), American scholar and activist whose work examined the connections between race, gender, and class. She often explored the varied perceptions of Black women and Black women writers and the development of feminist identities."
        },
        {
            author : "Steve Jobs",
            book : "Jobs",
            genre : "Autobiography",
            img : "edward.jpg",
            // about : "Edward Abbey, (born January 29, 1927, Indiana, Pennsylvania, U.S.—died March 14, 1989, near Tucson [now in Tucson], Arizona), American writer whose works, set primarily in the southwestern United States, reflect an uncompromising environmentalist philosophy.His book Desert Solitaire (1968), is considered by many to be his best."
        }
    ]
    
    
    authorsRouter.get('/', function (req, res) {
        res.render("authors", {
            nav,
            title: 'Authors',
            authors
        });
    });
    
    authorsRouter.get('/:id', function(req,res){
        const id = req.params.id;
        res.render('author',{
            nav,
            title: 'Author',
            author: authors[id]
        })
    });

    return authorsRouter;
}


module.exports = router;