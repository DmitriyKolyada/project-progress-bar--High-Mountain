const route = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const Checklist = require('../views/Checklist');
const { QuestionList, Anketa } = require('../../db/models');

route.get('/checklist', async (req, res) => {
  const { questionListid } = req.query;
  try {
    searchAnser = await Anketa.findAll({ raw: true, where: { id: questionListid }, include: { model: QuestionList } });
    renderTemplate(Checklist, { searchAnser }, res);
  } catch (error) {
    console.error(error);
  }
});

module.exports = route;
