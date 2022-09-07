'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ControlEmployeeAdaptation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.AdaptationList, { foreignKey: 'controlEmployeeAdaptationId' });
      this.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    }
  }
  ControlEmployeeAdaptation.init({
    userId: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER,
    statusAdaptation: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ControlEmployeeAdaptation',
  });
  return ControlEmployeeAdaptation;
};