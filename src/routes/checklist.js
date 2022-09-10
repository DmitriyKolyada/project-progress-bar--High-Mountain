const route = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const Checklist = require('../views/Checklist');
const { QuestionList, List } = require('../../db/models');

route.post('/checklist', async (req, res) => {
  const { questionListid } = req.query;
  try {
    searchAnser = await List.findAll({ raw: true, where: { id: questionListid }, include: { model: QuestionList } });
    renderTemplate(Checklist, { searchAnser }, res);
  } catch (error) {
    console.error(error);
  }
});

module.exports = route;
