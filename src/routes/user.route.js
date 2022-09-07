const route = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const User = require('../views/User');
const { UserDB } = require('../../db/models')

route.get('/user', (req, res) => {
    renderTemplate(User, null, res);
  });

module.exports = route;