var express = require('express');

var app = express()

var text = "INSERT INTO users(email) VALUES($1)"

app.use(express.static('public'))

var mustacheExpress = require('mustache-express');

//database

// var {
//   Client
// } = require('pg');
// var connectionString = process.env.DATABASE_URL;

// var client = new Client({
//     connectionString: connectionString,
//     ssl: true,
// });
// var bodyParser = require('body-parser');

// Register '.mustache' extension with The Mustache Express
app.engine('html', mustacheExpress());

app.set('view engine', 'html');
app.set('views', __dirname);
app.get('/', function(req,res){
    res.render('index', {name: req.query.name})
})

app.get('/', function(req,res){
    // res.send("hello")
})

// app.post('/post', function(req, res) {
//   console.log(req.body.email)
//   input = [req.body.comment]

//   client.query(text, input, (err, res) => {
//     if (err) throw err;
//   })
//   res.redirect('/')
// })

app.listen(8000, function(){
  console.log("connected")
})
