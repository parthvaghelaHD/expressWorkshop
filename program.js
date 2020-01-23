const express = require('express');
const app = express();  
const process = require('process');

app.use(express.static('public'));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.get('/home', function(req, res){
  res.end('Hello World!');
})
app.listen(process.argv[2]);