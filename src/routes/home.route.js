const route = require('express').Router();

const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');
const { User } = require('../../db/models');

route.get('/', (req, res) => {
  renderTemplate(Home, { username: req.session?.username, isAdmin: req.session.userrole }, res);
});

route.post('/', async (req, res) => {
  const { loginForm, passwordForm } = req.body;
  try {
    const user = await User.findOne({ where: { login: loginForm } });
    // console.log('user======>', user);
    if (user) {
      const passwordCheck = await bcrypt.compare(passwordForm, user.password);
      if (passwordCheck) {
        req.session.userid = user.id;
        req.session.username = `${user.firstNameHR} ${user.lastNameHR}`;
        req.session.userrole = user.isAdmin;
        req.session.newUser = user.login;
        req.session.save(() => {
          res.redirect('/user');
        });
        // res.redirect(`/user/${user.id}`);
      } else {
        res.send('неверный пароль');
      }
    } else {
      res.send('неверный логин');
    }
  } catch (error) {
    console.error(error);
  }
});

route.get('/signin', (req, res) => {
  //renderTemplate(SignInForm, {}, res);
  res.redirect('/');
});

route.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


module.exports = route;
