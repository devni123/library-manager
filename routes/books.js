/**
 * Created by VMANASH on 5/22/2017.
 */
var express = require('express');
var router = express.Router();
var db = require('../libs/db-manager');

router.get('/', function(req, res, next) {
    db.getAllBooks(function (err, row) {
        if(err) {
            res.sendStatus(500);
        } else {
            res.send(row);
        }
    });
});

router.get('/:id', function(req, res, next) {
    db.getBook(req.params.id, function (err, row) {
        if(err) {
            res.sendStatus(500);
        } else {
            res.send(row[0]);
        }
    });
});

module.exports = router;