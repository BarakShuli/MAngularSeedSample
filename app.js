var express  = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('angular-seed/dist/dev'));
app.use(express.static('angular-seed'));

//var admin = express();

app.get('/restTest', function(req, res){
  console.log("Rest Test");
  res.json("Rest Test"); 
});

app.all('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'angular-seed/dist/dev/index.html'));
});

app.listen(3000);
console.log("App listening on port 3000");
