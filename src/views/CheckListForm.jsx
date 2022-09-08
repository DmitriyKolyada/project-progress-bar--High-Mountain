const React = require('react');
const Layout = require('./Layout');

function CheckList(props) {
    console.log('CheckList=>>>>>>>>>', props);
  return (
    <Layout title="CheckList">
      <h1>Список вопросов для сотрудника</h1>
      <form action="/checklistform" method="POST">
      <input class="checkList__inputFirstN" type="text" placeholder="Имя сотрудника" name="userFirstname"/>  
      <input class="checkList__inputLastN" type="text" placeholder="Фамилия сотрудника" name="userLastname"/>   
        
        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="permit" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
        </div>
        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-2" value="yes" name="wifi" />
            <label class="checkList__label" for="checkbox-2">Наставник сообщил пароль от Wi-Fi</label>                                    
        </div>   
        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-3" value="yes" name="notebook" />
            <label class="checkList__label" for="checkbox-3">Системный администратор выдал мне ноутбук</label>                                    
        </div>
        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-4" value="yes" name="mailaccess" />
            <label class="checkList__label" for="checkbox-4">Системный администратор выдал мне доступы к почте</label>                                    
        </div>
        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-5" value="yes" name="listapplies" />
            <label class="checkList__label" for="checkbox-5">Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии</label>                                    
        </div>

        <p>Важно познакомиться с коллегами:</p>

        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-6" value="yes" name="meetboss" />
            <label class="checkList__label" for="checkbox-6">Ты познакомился (-ась) со своим руководителем</label>                                    
        </div>
        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-6" value="yes" name="commandchat" />
            <label class="checkList__label" for="checkbox-6">Ты написал(-а) сообщение в командный чат</label>                                    
        </div>
        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-7" value="yes" name="threecoleagues" />
            <label class="checkList__label" for="checkbox-7">Напиши имена трех твоих коллег по отделу:<input class="info-checkbox__input" type="text" id="checkbox-9" name="listcoleagues" /></label>                                    
        </div>

        <p>А теперь самое время работать:</p>

        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-8" value="yes" name="firsttask" />
            <label class="checkList__label" for="checkbox-8">Получи свою первую задачу у руководителя</label>                                    
        </div>
        <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-9" value="yes" name="assingtemplate" />
            <label class="checkList__label" for="checkbox-9">Создай подпись в почте по корпоративному шаблону</label>                                    
        </div>
      </form>     
        <p>Классного путешествия!</p>
        <p>Команда Высокой горы 💚</p>  
        <button type="submit">Сформировать анкету</button> 
    </Layout>
  );
}

module.exports = CheckList;