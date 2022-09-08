module.exports = {  
    async up (queryInterface, Sequelize) {    
      return queryInterface.bulkInsert('Users', [      
        {        
            firstNameHR: 'Иван',
            lastNameHR: 'Петров',       
            login: 'ivpet',
            password: '$2b$05$huljrSijPNCo4q93uzhkQeR7aJlHFptDRrL8U.MuYE8k.ODbVndeW',        
            email: 'test@mount.com',  
            isAdmin: true,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        }, 
        {        
            firstNameHR: 'Евгений',
            lastNameHR: 'Орлов',       
            login: 'ev',
            password: '$2b$05$huljrSijPNCo4q93uzhkQeR7aJlHFptDRrL8U.MuYE8k.ODbVndeW',        
            email: 'jonh@mount.com',  
            isAdmin: true,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        },  
        {        
            firstNameHR: 'Вася',
            lastNameHR: 'Пупкин',
            login: 'vpup',       
            password: '123',        
            email: 'vasyaPupkin@mount.com',  
            isAdmin: false,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        },
        {        
            firstNameHR: 'John',
            lastNameHR: 'Ivanov',
            login: 'jon',       
            password: '123',        
            email: 'jonhIvanov@mount.com',  
            isAdmin: true,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        },
        {        
            firstNameHR: 'Alex',
            lastNameHR: 'Titov',
            login: 'alex',       
            password: '123',        
            email: 'alex@mount.com',  
            isAdmin: false,    
            createdAt: new Date(),        
		        updatedAt: new Date(),
        },
        {        
            firstNameHR: 'Михаил',
            lastNameHR: 'Сомов',       
            login: 'mih',
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