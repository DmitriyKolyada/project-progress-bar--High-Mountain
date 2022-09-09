const React = require('react');
const Layout = require('./Layout');

function CheckList(props) {
    console.log('CheckList=>>>>>>>>>', props);
  return (
    <Layout title="CheckList">
      <h1>Список вопросов для сотрудника</h1>
      <form action="/checklistform/send" method="POST">
      <input className="checkList__inputFirstN" type="text" placeholder="Имя сотрудника" name="firstNameEmployee"/>  
      <input className="checkList__inputLastN" type="text" placeholder="Фамилия сотрудника" name="lastNameEmployee"/>   
        
        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-1" value="1" name="question" />
            <label className="checkList__label" htmlFor="checkbox-1">Наставник выдал мне пропуск</label>                                    
        </div>
        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-2" value="2" name="question" />
            <label className="checkList__label" htmlFor="checkbox-2">Наставник сообщил пароль от Wi-Fi</label>                                    
        </div>
        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-3" value="3" name="question" />
            <label className="checkList__label" htmlFor="checkbox-3">Системный администратор выдал мне ноутбук</label>                                    
        </div>
        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-4" value="4" name="question" />
            <label className="checkList__label" htmlFor="checkbox-4">Системный администратор выдал мне доступы к почте</label>                                    
        </div>
        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-5" value="5" name="question" />
            <label className="checkList__label" htmlFor="checkbox-5">Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии</label>                                    
        </div>

        <p>Важно познакомиться с коллегами:</p>

        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-6" value="6" name="question" />
            <label className="checkList__label" htmlFor="checkbox-6">Ты познакомился (-ась) со своим руководителем</label>                                    
        </div>
        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-6" value="7" name="question" />
            <label className="checkList__label" htmlFor="checkbox-6">Ты написал(-а) сообщение в командный чат</label>                                    
        </div>
        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-7" value="8" name="question" />
            <label className="checkList__label" htmlFor="checkbox-7">Напиши имена трех твоих коллег по отделу:<input className="info-checkbox__input" type="text" id="checkbox-9" name="listcoleagues" /></label>                                    
        </div>

        <p>А теперь самое время работать:</p>

        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-8" value="9" name="question" />
            <label className="checkList__label" htmlFor="checkbox-8">Получи свою первую задачу у руководителя</label>                                    
        </div>
        <div className="checkList-checkbox">
            <input className="checkList__input" type="checkbox" id="checkbox-9" value="10" name="question" />
            <label className="checkList__label" htmlFor="checkbox-9">Создай подпись в почте по корпоративному шаблону</label>                                    
        </div>
        <button type="submit">Сформировать анкету</button>
      </form>     
        <p>Классного путешествия!</p>
        <p>Команда Высокой горы 💚</p>         
    </Layout>
  );
}

module.exports = CheckList;