const express = require('express');

const app = express();

const checkDbConnection = require('./db/config/checkDbConnection');

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
  checkDbConnection();
});
