const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./app-routes');
const initDB = require('./db').initDB;

app.use(bodyParser.json());
app.use('/api', api);

// Make sure DB connection is established before app starts
initDB((err) => {
    //Server listening
    app.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server started on port 3000...');
    });
})

