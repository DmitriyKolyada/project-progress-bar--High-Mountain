'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdaptationList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ControlEmployeeAdaptation, { foreignKey: 'controlEmployeeAdaptationId' });
    }
  }
  AdaptationList.init({
    questionHR: DataTypes.STRING,
    answerEnploe: DataTypes.STRING,
    answerEmployeeStatus: DataTypes.BOOLEAN,
    controlEmployeeAdaptationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AdaptationList',
  });
  return AdaptationList;
};