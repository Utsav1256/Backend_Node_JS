const express = require('express');
const app = express();

app.get('/', function(req, res) {
 res.send('hey');
});
app.get('/profile', function(req, res) {
    res.send('hello from profile');
});
app.listen(3000);