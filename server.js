var _ = require('lodash');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', {});
});

app.get('/api/articles', function (req, res) {
    var page = parseInt(req.query.page) || 1;
    var articles = _.range(5).map(function (x, i) {
        return {
            author: 'Author #' + page,
            title: 'Title number is ' + page
        };
    });

    res.json(articles);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Sandbox app listening at http://%s:%s', host, port);

});
