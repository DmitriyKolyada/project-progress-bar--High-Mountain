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
    firstNameHR, lastNameHR, password, email,
  } = req.body;
  try {
    if (firstNameHR && lastNameHR && password && email) {
      const hashPasword = await bcrypt.hash(password, 5);
      const newUser = await User.create({
        firstNameHR, lastNameHR, password: hashPasword, email,
      });
      const login = `${newUser.firstNameHR}_${newUser.lastNameHR}`;
      req.session.newUser = login;
      req.session.save(() => {
        res.redirect('/home');
      });
    } else if (!firstNameHR) {
      res.send('Введите Ваше имя');
      res.status(400);
    } else if (!lastNameHR) {
      res.send('Введите Вашу фамилию');
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
    const emailAlreadyInUse = await User.findOne({ where: { email } });

    if (userRegisteredEarlier) {
      res.send('Пользователь уже зарегистрирован ранее, перейдитe на авторизацию');
      res.status(400);
    } else if (emailAlreadyInUse) {
      res.send('Данный Email уже используется');
      res.status(400);
    }
  }
});

module.exports = route;
