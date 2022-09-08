const route = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const CheckListForm = require('../views/CheckListForm');


route.get('/', (req, res) => {
    renderTemplate(CheckListForm, { username: req.session?.username }, res);
  });
  
  route.post('/send', (req, res) => {
  
    //renderTemplate(CheckList, { username: req.session?.username }, res);
  });

  module.exports = route;


//   {
//     userFirstname
//     userLastname
//     permit
//     wifi
//     notebook
//     mailaccess
//     listapplies
//     meetboss
//     commandchat
//     threecoleagues
//     firsttask
//     assingtemplate
//   }