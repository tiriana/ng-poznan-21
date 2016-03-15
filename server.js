var express = require('express');
var app = express();
var apiRouter = express.Router();
var itemRouter = express.Router({
    mergeParams: true
});

var itemsRepo = require('./lib/items');

apiRouter.use('/items', itemRouter);

apiRouter.route('/')
    .get(function (req, res) {
        res.status(200)
            .send('hello, this is API');
    });

itemRouter.route('/')
    .get(function (req, res) {
        res.status(200)
            .jsonp(itemsRepo(req.params.limit, req.params.offset));
    });

itemRouter.route('/:itemId')
    .get(function (req, res) {
        res.status(200)
            .jsonp(itemsRepo(1, req.params.itemId)[0]);
    });

app.use('/api', apiRouter);

app.use(express.static('public'));

app.listen(3000, function () {});
