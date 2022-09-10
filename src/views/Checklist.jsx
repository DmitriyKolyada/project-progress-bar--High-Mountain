const React = require('react');
const Layout = require('./Layout');

module.exports = function Checklist(props) {
  return (
    <Layout>
      <body>
        <form action="/checklist" method="POST" />
        <div>
          <h1>
            `Привет,$
            {props.firstNameEmployee}
            $
            {props.lastNameEmployee}
            !`
          </h1>
          <h2>
            <br>"И добро пожаловать в команду Высокогорья!</br>
            <br>"Впереди нас ждет интересное путешествие в мир нашей компании, и"</br>
            <br>
              `самым главным проводником будет- $
              {props.firstNameHR}
              $
              {props.lastNameHR}
              `
            </br>
          </h2>
          <h3>
            <br>
              "Мы подготовили для тебя чек-лист на первый день. Процесс выполнения будет"
            </br>
            <br>
              "сохраняться, поэтому ты можешь закрывать пункты в удобном для тебя порядке."
            </br>
          </h3>
        </div>
        <div>
          <h2>"Список вопросов чек-листа"</h2>
          { props.permi ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="permit" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;
          { props.wifi ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="wifi" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;
          { props.notebook ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="notebook" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;
          { props.mailaccess ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="mailaccess" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;
          { props.listapplies ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="listapplies" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;
          <p>Важно познакомиться с коллегами:</p>
          { props.meetboss ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="meetboss" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;
          { props.commandchat ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="commandchat" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;
          { props.threecoleagues ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="threecoleagues" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;
          <p>А теперь самое время работать:</p>
          { props.firsttask ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="firsttask" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;
          { props.assingtemplate ? (
            <div className="checkList-checkbox">
              <input className="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="assingtemplate" />
              <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>
            </div>
          ) : (''
          )}
          ;

        </div>
      </body>
      <futer>
        <p> "Классного путешествия!"</p>
        <p>"Команда Высокой горы 💚"</p>
      </futer>
    </Layout>
  );
};
