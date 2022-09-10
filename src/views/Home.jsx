const React = require('react');
const Layout = require('./Layout');

function Home(props) {
  // console.log('PropsHome=>>>>>>>>>', props);
  return (
    <Layout title="Home" userName={props.userName} isAdmin={props.isAdmin}>
      <div className="home__text">
        <p>Привет! Это корпоративный портал ООО “Высокая Гора”. Чтобы получить доступ к сайту - обратись в департамент HR.</p>
      </div>
      {props.userName
        ? (
          <>

          </>
        ) : (
          <>
            <form action="/" method="POST">
              <label className="log__label" id="logId" htmlFor="tagName">
                Логин:
                <input id="logId" type="text" name="login" />
              </label>
              <label className="pass__label" id="passId" htmlFor="passId">
                Пароль:
                <input id="passId" type="password" name="password" />
              </label>
              <button type="submit">Войти</button>
            </form>

            <a className="nav-link" href="/registration">Регистрация</a>

            {/* <button type="submit">Регистрация</button> */}
          </>
        )}
    </Layout>
  );
}

module.exports = Home;
