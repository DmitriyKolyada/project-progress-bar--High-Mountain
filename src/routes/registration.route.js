const bcrypt = require('bcrypt');

const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const UserRegistration = require('../views/UserRegistration');

const { User } = require('../../db/models');

route.get('/', (req, res) => {
  renderTemplate(UserRegistration, null, res);
});

route.post('/', async (req, res) => {
  const {
    firstNameHR, lastNameHR, login, password, email,
  } = req.body;
  try {
    if (firstNameHR && lastNameHR && login && password && email) {
      const hashPasword = await bcrypt.hash(password, 5);
      const newUser = await User.create({
        firstNameHR, lastNameHR, login, password: hashPasword, email,
      });
      req.session.userId = newUser.id;
      req.session.user = newUser.login;
      req.session.userName = `${newUser.firstNameHR} ${newUser.lastNameHR}`;
      req.session.userRole = newUser.isAdmin;
      req.session.save(() => {
        res.redirect('/user');
      });
    } else if (!firstNameHR) {
      res.send('Введите Ваше имя');
      res.status(400);
    } else if (!lastNameHR) {
      res.send('Введите Вашу фамилию');
      res.status(400);
    } else if (!login) {
      res.send('Введите Ваш логин');
      res.status(400);
    } else if (!password) {
      res.send('Придумайте пароль');
      res.status(400);
    } else if (!email) {
      res.send('Введите Ваш email');
      res.status(400);
    }
  } catch (error) {
    const userRegisteredEarlier = await User.findOne({ where: { firstNameHR, lastNameHR, email } });
    const loginAlreadyInUse = await User.findOne({ where: { login } });
    const emailAlreadyInUse = await User.findOne({ where: { email } });

    if (userRegisteredEarlier) {
      res.send('Пользователь уже зарегистрирован ранее, перейдитe на авторизацию');
      res.status(400);
    } else if (loginAlreadyInUse) {
      res.send('Данный логин уже используется');
      res.status(400);
    } else if (emailAlreadyInUse) {
      res.send('Данный Email уже используется');
      res.status(400);
    }
  }
});

module.exports = route;
