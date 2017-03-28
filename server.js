const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));



/**
 * Error Handling
 */

app.use(function(req, res, next) {
    console.log('404')
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.sendStatus(err.status || 500);
});


app.listen(8000, (err) => {
    if (err) console.log(err);

    console.log('listening on: http://localhost:8000');
});