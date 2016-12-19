var express = require('express');

var bookRouter = express.Router();


var router = function(nav){

    var books = [
            {
                title : 'Harry Potter e a Pedra Filosofal',
                genre : 'Aventura',
                author : 'J.K. Rowling',
                read : false
            },
            {
                title : 'Game of Thrones',
                genre : 'Guerra',
                author : 'Maquiavel',
                read : false
            },
            {
                title : 'Pequeno principe',
                genre : 'Romance',
                author : 'Shakespeare',
                read : false
            }

        ];

    bookRouter.route('/')
        .get(function(req, res){
            res.render('bookListView',{title: 'books', 
            nav: nav,
            books : books
            });
        });

    bookRouter.route('/:id')
        .get(function(req,res){
            var id = req.params.id;

            res.render('bookView',{
                title: 'books', 
                nav: nav,
                book : books[id]
            });
        });
        
    return bookRouter;
}


module.exports = router;