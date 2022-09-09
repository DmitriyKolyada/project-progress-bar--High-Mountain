module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AnketaQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      anketaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lists',
          key: 'id',
        },
      },
      questionListId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'QuestionLists',
          key: 'id',
        },
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
    await queryInterface.dropTable('AnketaQuestions');
  },
};
