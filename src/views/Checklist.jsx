const React = require('react');
const Layout = require('./Layout');

module.exports = function  Checklist(props){
    return (
        <Layout title="Checklist"> 
        <body>
           <div>
            <h1>
           `Привет,${props.firstNameEmployee}${props.lastNameEmployee}!`
            </h1>
            <h2>
            <br>"И добро пожаловать в команду Высокогорья!</br>
            <br>"Впереди нас ждет интересное путешествие в мир нашей компании, и"</br>
            <br>`самым главным проводником будет- ${props.firstNameHR}${props.lastNameHR}`</br>
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
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="permit" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};
                 { props.wifi ? (
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="wifi" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};
                 { props.notebook ? (
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="notebook" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};
                 { props.mailaccess ? (
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="mailaccess" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};
                 { props.listapplies ? (
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="listapplies" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};
         <p>Важно познакомиться с коллегами:</p>
         { props.meetboss ? (
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="meetboss" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};
                { props.commandchat ? (
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="commandchat" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};
                { props.threecoleagues ? (
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="threecoleagues" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};
                <p>А теперь самое время работать:</p>
                { props.firsttask ? (
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="firsttask" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};
                 { props.assingtemplate ? (
                <div class="checkList-checkbox">
            <input class="checkList__input" type="checkbox" id="checkbox-1" value="yes" name="assingtemplate" />
            <label class="checkList__label" for="checkbox-1">Наставник выдал мне пропуск</label>                                    
          </div>
                ) : (''
                )};

            </div>
        </body>     
        <futer>
            <p> "Классного путешествия!"</p>
            <p>"Команда Высокой горы 💚"</p>
        </futer>
        </Layout>
      );
 };