const route = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');
const { User } = require('../../db/models')

route.get('/', (req, res) => {
  renderTemplate(Home, {username: req.session?.username, isAdmin: req.session.userrole}, res);
});

route.post('/', async (req, res) => {

  const { loginForm, passwordForm } = req.body;
  console.log(loginForm, passwordForm);
  const user = await User.findOne({ where: { email: loginForm } });
  console.log('user======>', user);
  if (user) {
    if (req.body.passwordForm === user.password) {   
      req.session.userid = user.id;  
      req.session.username = `${user.firstNameHR} ${user.lastNameHR}`;    
      req.session.userrole = user.isAdmin;
      req.session.save((error)=>{
      res.redirect('/');      
      });
      //res.redirect(`/user/${user.id}`);
    } else {
      return res.send('неверный пароль');
    }
  } else {
    return res.send('неверный логин');
  }
});

module.exports = route;