module.exports = {  
    async up (queryInterface, Sequelize) {    
      return queryInterface.bulkInsert('QuestionLists', [      
        {        
            questionHR: 'Наставник выдал мне пропуск',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        }, 
        {        
            questionHR: 'Наставник сообщил пароль от Wi-Fi',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        },{        
            questionHR: 'Системный администратор выдал мне ноутбук',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        },{        
            questionHR: 'Системный администратор выдал мне доступы к почте',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        },{        
            questionHR: 'Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        },{        
            questionHR: 'Ты познакомился (-ась) со своим руководителем',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        },{        
            questionHR: 'Ты написал(-а) сообщение в командный чат',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        },{        
            questionHR: 'Напиши имена трех твоих коллег по отделу',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        },{        
            questionHR: 'Получи свою первую задачу у руководителя',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        },{        
            questionHR: 'Создай подпись в почте по корпоративному шаблону',                
            createdAt: new Date(),        
		    updatedAt: new Date(),
        },
      ], {});
    },  
    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('QuestionLists', null, {});
    }  
  }