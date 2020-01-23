const express = require('express');
const app = express();  
const process = require('process');
const path = require('path')

app.use(express.static('public'));
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.set('view engine', 'pug')
app.set('views', process.argv[3])

app.get('/home', (req, res) => {
  res.render('index', {date : new Date().toDateString()});
})
app.listen(process.argv[2]);