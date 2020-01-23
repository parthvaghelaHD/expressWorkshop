const express = require('express');
const app = express();  
const process = require('process');
const path = require('path')
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}))

app.use(express.static('public'));
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
// app.set('view engine', 'pug')
// app.set('views', process.argv[3])

// app.get('/home', (req, res) => {
//   res.render('index', {date : new Date().toDateString()});
// })

app.post('/form', (req, res)=> {
  console.log(req.body);
  res.send(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2]);