const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout title="Home">      
      <div className = "home__text">
        <p>Привет! Это корпоративный портал ООО “Высокая Гора”. Чтобы получить доступ к сайту - обратись в департамент HR.</p>
      </div>
      <form action="/" method="POST">
      <label className="log__label" id="logId" htmlFor="tagName">Логин:
        <input id="logId" type="text" name="loginForm" />
      </label>
      <label className="pass__label" id="passId" htmlFor="tagName">Пароль:
        <input id="passId" type="password" name="passwordForm" />
      </label>        
        <button type="submit">Войти</button>
      </form>
    </Layout>
  );
}

module.exports = Home;