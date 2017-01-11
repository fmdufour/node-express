var express = require('express');
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var bookRouter = express.Router();


var router = function(nav){

    bookRouter.route('/')
        .get(function(req, res){

            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db){
                var collection = db.collection('books');

                collection.find({}).toArray(
                    function(err, results){                        
                        res.render('bookListView',{title: 'books', 
                        nav: nav,
                        books : results
                        });
                    });
            });



        });

    bookRouter.route('/:id')
        .get(function(req,res){
            var id = new objectId(req.params.id);

            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db){
                var collection = db.collection('books');

                collection.findOne({ _id : id }, function(err, result){                        
                        res.render('bookView',{
                            title: 'books', 
                            nav: nav,
                            book : result
                        });
                    });
            });


        });
        
    return bookRouter;
};


module.exports = router;