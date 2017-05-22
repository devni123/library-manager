/**
 * Created by VMANASH on 5/22/2017.
 */
var connection = require('./db-connector').connection;

/**
 * Handles errors returned by MYSQL, error messages are customized in a way
 * that it can give a meaningful information.
 *
 * @param  {Object}   err       ERROR object that's returned by
 * @param  {Function} callback  The callback to call with the result of the
 *                             	matching process.
 */
var errorHandler = function(err, callback) {
    switch (err.code) {
        case 'ER_PARSE_ERROR': 	callback('message might contain harmful content', null);
            break;
        default : callback(err,null);
            break;
    }
}

/**
 * Gets all books from the books table.
 *
 * @param  {Function} callback 	The callback to call with the result of the
 *                             	matching process.
 */
var getAllBooks = function(callback) {
    var options = {
        sql : 'select * from books'
    };
    connection.query(options, function(err, results) {
        if (err) {
            errorHandler(err, callback);
        } else {
            callback(null,results);
        }
    });
}

/**
 * Gets action details for the given action id.
 *
 * @param   {object}  bookId    Book Id that is used to query the database
 * @param  {Function} callback 	The callback to call with the result of the
 *                             	matching process.
 */
var getBook = function(bookId, callback) {
    var options = {
        sql : 'select * from books where bookId=' + bookId
    };
    connection.query(options, function(err, results) {
        if (err) {
            errorHandler(err, callback);
        } else {
            callback(null,results);
        }
    });
}
module.exports = {
    getAllBooks,
    getBook
}