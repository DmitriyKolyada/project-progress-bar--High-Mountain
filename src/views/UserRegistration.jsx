const React = require('react');

const Layout = require('./Layout');

module.exports = function userRegistration() {
  return (
    <Layout>
      <h2>Регисрация нового пользователя</h2>

      <form action="/registration" method="POST">
        <label htmlFor="firstNameHR-input" className="">
          Ваше имя:
          <input
            type="text"
            id="ufirstNameHR-input"
            name="firstNameHR"
            tabIndex="1"
            className=""
          />
        </label>

        <label htmlFor="lastNameHR-input" className="">
          Ваша фамилия:
          <input
            type="text"
            id="lastNameHR-input"
            name="lastNameHR"
            tabIndex="2"
            className=""
          />
        </label>

        <label htmlFor="password-input" className="">
          Придумайте логин:
          <input
            type="login"
            id="login-input"
            name="login"
            tabIndex="3"
            className=""
          />
        </label>

        <label htmlFor="password-input" className="">
          Придумайте пароль:
          <input
            type="password"
            id="password-input"
            name="password"
            tabIndex="3"
            className=""
          />
        </label>

        <label htmlFor="email-input" className="">
          Ваш email:
          <input
            type="email"
            id="email-input"
            name="email"
            tabIndex="4"
            className=""
          />
        </label>

        <input
          type="submit"
          value="Зарегистрироваться"
          tabIndex="5"
          className=""
        />
      </form>
    </Layout>
  );
};
