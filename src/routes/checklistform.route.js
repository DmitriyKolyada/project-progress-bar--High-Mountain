const route = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const CheckListForm = require('../views/CheckListForm');
const { QuestionList } = require('../../db/models');
const { Employee } = require('../../db/models');
const { List } = require('../../db/models');
const { AnketaQuestion } = require('../../db/models');

route.get('/', (req, res) => {
  try {
    renderTemplate(CheckListForm, { username: req.session?.username }, res);
  } catch (error) {
    console.log('error', error);
  }
});

route.post('/send', async (req, res) => {
  try {
    console.log('req.bodySend=>>>>>>>>>', req.body);
    const {firstNameEmployee, lastNameEmployee} = req.body;
    const newUser = await Employee.create({ firstNameEmployee, lastNameEmployee, statusAdaptation: false, userId: req.session.userid });
    console.log('newUser=>>>>>>>>>', newUser.id);
    const userList = await List.create({ employeeId: newUser.id });
    console.log('userList=>>>>>>', userList.id);
    const allQuestions = await QuestionList.findAll({ raw: true });
    const selectedIdQuestions = req.body.question;
    for(let i=0; i<allQuestions.length; i++){
      for(let j=0; j<selectedIdQuestions.length; j++){
        if(allQuestions[i].id == selectedIdQuestions[j]){
          await AnketaQuestion.create({anketaId: userList.id, questionListId: allQuestions[i].id});
        }
      }
    }
    res.redirect('/checklistform');
  } catch (error) {
    console.log('error', error);
  }
});

module.exports = route;