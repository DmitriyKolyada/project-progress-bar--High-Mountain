'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anketa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.QuestionList, { through: 'AnketaQuestions', foreignKey: 'anketaId' });
      this.belongsTo(models.Employee);
    }
  }
  Anketa.init({
    employeeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Anketa',
  });
  return Anketa;
};