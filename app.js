const express = require('express');

const app = express();
const path = require('path');

const checkDbConnection = require('./db/config/checkDbConnection');

const homeRoute = require('./src/routes/home.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public/')));

app.use('/', homeRoute);



const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
  checkDbConnection();
});
