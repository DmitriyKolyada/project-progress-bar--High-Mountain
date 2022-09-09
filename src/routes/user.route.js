const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const UserInterface = require('../views/UserInterface');
const { User } = require('../../db/models');

route.get('/', async (req, res) => {
  const { userName, isAdmin } = req.session;
  const allUsers = await User.findAll({ raw: true });
  renderTemplate(UserInterface, { userName, isAdmin, allUsers }, res);
});

route.post('/', async (req, res) => {
  
  // const {userRole} = req.body;
  // if(userRole) {

  // }
  // console.log('~ req.body', req.body)
  // console.log('~ userRole', userRole)
  res.redirect('/user');
  res.end();
  // const changeUserRole =
});

module.exports = route;
