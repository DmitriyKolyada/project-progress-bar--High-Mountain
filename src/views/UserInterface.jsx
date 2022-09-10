const React = require('react');
const Layout = require('./Layout');

module.exports = function UserInterface({ userName, isAdmin, allUsers }) {
  // console.log('~ allUsers<<<<<<<<<<<<<<<<<<<<', allUsers);
  // console.log('~ allUsers<+++++?????>>>>>', allUsers.value);
  return (
    <Layout userName={userName} isAdmin={isAdmin}>
      <div>
        <h2>
          Привет,
          {' '}
          {userName}
          !
        </h2>
        <a href="/checklistForm">создать листок-адаптации</a>
      </div>
      <div className="usersList">
        <div>
          <h5>Список ползователей</h5>
        </div>
        <div>
          <h5>Роли ползователей</h5>
        </div>
      </div>
      <div className="box-userList">
        {
        allUsers.map((user) => (
          <div key={user.id} className="usersList">
            <h6>
              {user.firstNameHR}
              {' '}
              {user.lastNameHR}
            </h6>
            <form name="userListForm" action="/user" method="POST">
              <select name="userRole">
                <option value="null" />
                <option value="user">User</option>
                <option value="admin">Administrator</option>
              </select>
              {

              }
              <input type="submit" value="Применить" />
            </form>
          </div>
        ))
      }
      </div>

    </Layout>
  );
};
