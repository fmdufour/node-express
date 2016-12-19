var express = require("express");

var app = express();

var port = 5000;

var nav = [{ Link:'/Books' , Text: 'Books' } , { Link: '/Author', Text : 'Author'}];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));

app.set('views','src/views');
app.set('view engine','ejs');


app.use('/Books', bookRouter);

app.get('/', function(req, res){
	res.render('index', {title: 'pagina', nav : nav});
});

app.get('/books', function(req, res){
	res.send("ola livros");
});

app.listen(port, function(err){
	console.log("Servidor rodando na porta " + port);
});