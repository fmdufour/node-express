var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();

var port = 5000;

var nav = [{ Link:'/Books' , Text: 'Books' } , { Link: '/Author', Text : 'Author'}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(session({
	secret : 'library',
	saveUninitialized : true,
	resave : false
}));
require('./src/config/passport')(app);

app.set('views','src/views');
app.set('view engine','ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/', function(req, res){
	res.render('index', {title: 'pagina', nav : nav});
});

app.get('/books', function(req, res){
	res.send("ola livros");
});

app.listen(port, function(err){
	console.log("Servidor rodando na porta " + port);
});
