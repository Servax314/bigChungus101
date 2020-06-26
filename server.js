const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/bigchungus'
const port = 3000;

mongoose.connect(url, {useNewUrlParser : true});

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})
db.on('error', err => {
  console.error('connection error:', err)
})

app.use(express.json());
app.use(express.static(__dirname + '/public'));

//app.use('/', require('./routes/index.js'));

app.listen(port, ()=>{
    console.log('Listening to port ' + port.toString());
});