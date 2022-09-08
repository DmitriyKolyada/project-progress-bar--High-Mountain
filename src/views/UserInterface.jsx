const React = require('react');
const Layout = require('./Layout');

module.exports = function UserInterface({ username, isAdmin}) {
  return (
    <Layout title={username}>
      <h2>
        Привет,
        {' '}
        {username}
        !
      </h2>
    </Layout>
  );
};
