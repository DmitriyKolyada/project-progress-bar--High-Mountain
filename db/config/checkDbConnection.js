const { sequelize } = require('../models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('connect Sequelize');
  } catch (error) {
    throw new Error('Sequelize is not connected', error);
  }
};
