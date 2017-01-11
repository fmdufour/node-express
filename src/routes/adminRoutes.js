var express = require('express');
var mongodb = require('mongodb').MongoClient;

var adminRouter = express.Router();


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

var router = function(nav){

    adminRouter.route('/addBooks')
        .get(function(req, res){

            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db){
                var collection = db.collection('books');

                collection.insertMany(books, function(err, results){
                    res.send(results);
                    db.close();
                });
            });

        });



    return adminRouter;
};

module.exports = router;