module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstNameHR: 'Иван',
        lastNameHR: 'Петров',
        login: 'IV_pet',
        password: '$2b$05$huljrSijPNCo4q93uzhkQeR7aJlHFptDRrL8U.MuYE8k.ODbVndeW',
        email: 'test@mount.com',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstNameHR: 'Евгений',
        lastNameHR: 'Орлов',
        login: 'EV_orl',
        password: '123',
        email: 'jonh@mount.com',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstNameHR: 'Вася',
        lastNameHR: 'Пупкин',
        login: 'VA_pup',
        password: '123',
        email: 'vasyaPupkin@mount.com',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstNameHR: 'John',
        lastNameHR: 'Ivanov',
        login: 'JO_iva',
        password: '123',
        email: 'jonhIvanov@mount.com',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstNameHR: 'Alex',
        lastNameHR: 'Titov',
        login: 'AL_tit',
        password: '123',
        email: 'alex@mount.com',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstNameHR: 'Михаил',
        lastNameHR: 'Сомов',
        login: 'MI_som',
        password: '123',
        email: 'miha@mount.com',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
