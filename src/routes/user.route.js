const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const UserInterface = require('../views/UserInterface');
const { User } = require('../../db/models');

route.get('/', (req, res) => {
  const { userName, isAdmin } = req.session;
  renderTemplate(UserInterface, { userName, isAdmin }, res);
});

// route.post('/', async (req, res) => {

// });


module.exports = route;
