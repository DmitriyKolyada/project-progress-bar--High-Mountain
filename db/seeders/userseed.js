module.exports = {  
    async up (queryInterface, Sequelize) {    
      return queryInterface.bulkInsert('Users', [      
        {        
            firstNameHR: 'Иван',
            lastNameHR: 'Петров',       
            password: '123',        
            email: 'test@mount.com',  
            isAdmin: true,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        }, 
        {        
            firstNameHR: 'Евгений',
            lastNameHR: 'Орлов',       
            password: '123',        
            email: 'jonh@mount.com',  
            isAdmin: true,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        },  
        {        
            firstNameHR: 'Вася',
            lastNameHR: 'Пупкин',       
            password: '123',        
            email: 'vasyaPupkin@mount.com',  
            isAdmin: false,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        },
        {        
            firstNameHR: 'John',
            lastNameHR: 'Ivanov',       
            password: '1234',        
            email: 'jonhIvanov@mount.com',  
            isAdmin: true,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        },
        {        
            firstNameHR: 'Alex',
            lastNameHR: 'Titov',       
            password: '123',        
            email: 'alex@mount.com',  
            isAdmin: false,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        },
        {        
            firstNameHR: 'Михаил',
            lastNameHR: 'Сомов',       
            password: '123',        
            email: 'miha@mount.com',  
            isAdmin: true,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        },
      ], {});
    },  
    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
    }  
  }