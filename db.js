const mysql = require('mysql');

let _db;

function initDB(callback) {
    if (_db) {
        console.warn("Trying to init db again. DB connection already exits");
        return callback(null, _db);
    }
    //create database connection
    _db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'tiger',
        database: 'restful_db'
    });

    //connect to database
    _db.connect((err) => {
        if (err)
            return callback(err);
        console.log('Mysql Connected...');
        return callback(null, _db)

    });
}

function getDB() {
    if (_db) {
        return _db;
    }
    console.warn("Db has not been initialized. Please call init first.");
}

module.exports = {
    initDB,
    getDB
}