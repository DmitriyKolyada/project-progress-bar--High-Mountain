const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ControlAdaptation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Employee, { foreignKey: 'employeeId' });
      this.belongsTo(models.QuestionList, { foreignKey: 'adaptationListId' });
    }
  }
  ControlAdaptation.init({
    employeeId: DataTypes.INTEGER,
    adaptationListId: DataTypes.INTEGER,
    answerEmployee: DataTypes.STRING,
    answerStatusEmployee: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'ControlAdaptation',
  });
  return ControlAdaptation;
};
