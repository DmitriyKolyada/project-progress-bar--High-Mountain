const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const UserInterface = require('../views/UserInterface');
const { User } = require('../../db/models');

route.get('/', (req, res) => {
  const userName = req.session?.username;
  console.log('~ userName+++++++++++++', userName)
  
  renderTemplate(UserInterface, { userName, isAdmin: req.session.userrole }, res);
});

// route.post('/', async (req, res) => {

// });


module.exports = route;
