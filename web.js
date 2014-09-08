var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(morgan());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');
app.engine('.html', require('ejs')
    .renderFile);


app.get('/', function(req, res) {
    res.render('index');
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log('Listening on ' + port);
});