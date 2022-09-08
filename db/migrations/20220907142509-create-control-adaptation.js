module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ControlAdaptations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'Employees' },
          key: 'id',
        },
      },
      adaptationListId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'QuestionLists' },
          key: 'id',
        },
      },
      answerEmployee: {
        type: Sequelize.STRING,
      },
      answerStatusEmployee: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ControlAdaptations');
  },
};
