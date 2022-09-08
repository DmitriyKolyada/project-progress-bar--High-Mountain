const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasOne(models.Anketa, { foreignKey: 'employeeId' });
    }
  }
  Employee.init({
    firstNameEmployee: DataTypes.STRING,
    lastNameEmployee: DataTypes.STRING,
    statusAdaptation: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};
