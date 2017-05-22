/**
 * Created by VMANASH on 5/20/2017.
 */
var config = require('../config/config.json');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
});

module.exports.connection = connection;