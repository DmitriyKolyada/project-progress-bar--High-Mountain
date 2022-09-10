const React = require('react');
const Layout = require('./Layout');

function User() {
  return (
    <Layout title="User">    
    <a href="/checklistForm">LinkToCheckListForm</a>  
      {/* <nav>
      <a href='#' className="card-link">Все листки адаптации</a>
      <a href='#' className="card-link">Подробнее</a>      
      </nav> */}
    </Layout>
  );
}

module.exports = User;