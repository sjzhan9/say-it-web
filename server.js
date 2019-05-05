var express = require('express');

var app = express()

app.use(express.static('public'))

var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('html', mustacheExpress());

app.set('view engine', 'html');
app.set('views', __dirname);
app.get('/', function(req,res){
    res.render('index', {name: req.query.name})
})

app.get('/', function(req,res){
    res.send("hello")
})

app.listen(8000, function(){
  console.log("connected")
})
