const express = require('express');
const path = require('path');

const app = express();

app.get('/:route/:file', (req, res) => {
    var route = req.params.route;
    var file = req.params.file;

    res.status(200).sendFile(path.join(__dirname + '/client/' + route + '/' + file));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
