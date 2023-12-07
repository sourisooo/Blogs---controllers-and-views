const express = require('express');
const router = require('./router');
const dataset = require('./data/articles.json');


const app = express();


app.set('view engine', 'ejs');

// app.set('views', __dirname + '/integration');

app.use(express.static('public'));




app.locals.dataset = dataset;

// console.log(dataset);

app.use(router);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
