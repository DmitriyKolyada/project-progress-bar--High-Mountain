'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnketaQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AnketaQuestion.init({
    anketaId: DataTypes.INTEGER,
    questionListId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AnketaQuestion',
  });
  return AnketaQuestion;
};