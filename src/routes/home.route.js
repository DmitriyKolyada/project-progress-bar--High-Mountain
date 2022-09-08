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
        req.session.save(() => {
          res.redirect('/');
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

module.exports = route;
