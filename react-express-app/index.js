const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/public')));
app.use('/home', express.static(path.join(__dirname + 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {   
    app.use(express.static(path.join(__dirname, 'client/build')));  //  
    app.get('*', (req, res) => {    
        res.sendfile(path.join(__dirname = 'client/build/index.html'));  
    });
}
app.get('*', (req, res) => {  
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});
app.get('/getCourses', (req, res) => {
    
});

app.get('/:route/:file', (req, res) => {
    var route = req.params.route;
    var file = req.params.file;

    res.status(200).sendFile(path.join(__dirname + '/client/' + route + '/' + file));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
