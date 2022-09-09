const React = require('react');
const Layout = require('./Layout');

module.exports = function UserInterface({ userName, isAdmin}) {
  return (
    <Layout userName={userName} isAdmin={isAdmin}>
      <h2>
        Привет,
        {' '}
        {userName}
        !
      </h2>
    </Layout>
  );
};
