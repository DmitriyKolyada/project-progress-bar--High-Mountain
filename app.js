const express = require('express');

const app = express();
const path = require('path');

const checkDbConnection = require('./db/config/checkDbConnection');

const homeRoute = require('./src/routes/home.route');
const regisnrationRoute = require('./src/routes/registration.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public/')));

app.use('/', homeRoute);
app.use('/registration', regisnrationRoute);


const { DEV_PORT } = process.env;

app.listen(DEV_PORT, () => {
  console.log(`server started PORT: ${DEV_PORT}`);
  checkDbConnection();
});
