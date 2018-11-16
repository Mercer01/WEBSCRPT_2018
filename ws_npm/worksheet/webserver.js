const express = require('express');
const app = express();

app.get('/add', function (req, res) {
  res.send(String(Number(req.query.a) + Number(req.query.b)));
});

app.get('/subtract', function(req, res) {
    res.send(String(Number(req.query.a) - Number(req.query.b)));
});

app.get('*', function(req, res){
    res.send('404', 404);
  });

app.listen(8080);
