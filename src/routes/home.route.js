const route = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');

route.get('/', (req, res) => {
    renderTemplate(Home, null, res);
});

route.post('/', async (req, res) => {
  
    const { loginForm, passwordForm } = req.body;
    console.log(loginForm, passwordForm);
    // const user = await User.findOne({ where: { login: loginForm } });
    // if (user) {
    //   if (req.body.password) === user.password) {        
    //     req.session.username = user.login;
    //     req.session.userid = user.id;
    //     res.redirect(`/user/${user.id}`);
    //   } else {
    //     return res.send('wrong pass');
    //   }
    // } else {
      //return res.send("неверный логин")
    // }
  });




module.exports = route;