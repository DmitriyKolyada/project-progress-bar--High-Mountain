require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const checkDbConnection = require('./db/config/checkDbConnection');

const homeRoute = require('./src/routes/home.route');
const regisnrationRoute = require('./src/routes/registration.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public/')));
app.use(cookieParser());

app.use(session({
  store: new FileStore(),
  secret: process.env.SECRET ?? 'fdsgkfsgdsfsc372d32fdb4f',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));


app.use('/', homeRoute);
app.use('/registration', regisnrationRoute);


const { DEV_PORT } = process.env;

app.listen(DEV_PORT, () => {
  console.log(`server started PORT: ${DEV_PORT}`);
  checkDbConnection();
});
