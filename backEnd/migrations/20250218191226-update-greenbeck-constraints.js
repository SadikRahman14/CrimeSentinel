'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('GreenBecks', 'email', {
      type: Sequelize.STRING,
      allowNull: false,  
      unique: true,      
    });

    await queryInterface.changeColumn('GreenBecks', 'name', {
      type: Sequelize.STRING,
      allowNull: false, 
    });

    await queryInterface.changeColumn('GreenBecks', 'age', {
      type: Sequelize.INTEGER,
      allowNull: false,  
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('GreenBecks', 'email', {
      type: Sequelize.STRING,
      allowNull: true,  
      unique: false, 
    });

    await queryInterface.changeColumn('GreenBecks', 'name', {
      type: Sequelize.STRING,
      allowNull: true,  
    });

    await queryInterface.changeColumn('GreenBecks', 'age', {
      type: Sequelize.INTEGER,
      allowNull: true, 
    });
  }
};
