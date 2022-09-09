const route = require('express').Router();

const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');
const { User } = require('../../db/models');

route.get('/', (req, res) => {
  const { userName, isAdmin } = req.session;
  renderTemplate(Home, { userName, isAdmin }, res);
});

route.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const newUser = await User.findOne({ where: { login } });
    if (newUser) {
      const passwordCheck = await bcrypt.compare(password, newUser.password);
      if (passwordCheck) {
       
        req.session.userFirstName = user.firstNameHR;
        req.session.userLastName = user.lastNameHR;
        req.session.userId = newUser.id;
        req.session.userName = `${newUser.firstNameHR} ${newUser.lastNameHR}`;
        req.session.isAdmin = newUser.isAdmin;
        req.session.newUser = newUser.login;

        req.session.save(() => {
          res.redirect('/user');
        });
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
  res.redirect('/');
});

route.get('/logout', async (req, res) => {
  try {
    if (req.session.newUser) {
      console.log('~ req.session.newUser', req.session.newUser);
      req.session.destroy(() => {
        res.clearCookie('UserCookie');
        res.redirect('/');
      });
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = route;
