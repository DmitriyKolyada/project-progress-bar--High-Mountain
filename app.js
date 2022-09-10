require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { DEV_PORT, SESSION_SECRET } = process.env;
const checkDbConnection = require('./db/config/checkDbConnection');

const homeRoute = require('./src/routes/home.route');
const userRoute = require('./src/routes/user.route');
const registrationRoute = require('./src/routes/registration.route');
const checkListFormRoute = require('./src/routes/checklistForm.route');
const checklist = require('./src/routes/checklist');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public/')));
app.use(cookieParser());

app.use(session({
  name: 'UserCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'fdsgkfsgdsfsc372d32fdb4f',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 100000000,
    httpOnly: true,
    secure: false,
  },
}));

app.use('/', homeRoute);
app.use('/user', userRoute);
app.use('/registration', registrationRoute);
app.use('/checklistForm', checkListFormRoute);
app.use('/checklist', checklist);

app.listen(DEV_PORT, () => {
  console.log(`server started PORT: ${DEV_PORT}`);
  checkDbConnection();
});
