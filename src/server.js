require('dotenv').config(); 
const port = process.env.PORT
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./server/routes');

app.set('views', 'ejs')
app.set('views', `${__dirname}/views`);

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes)

app.listen(3000, () => {
  console.log("Server Working")
})

///Users/debrenamcewen/guild/bitcoinPriceNotify/public
module.exports = app;