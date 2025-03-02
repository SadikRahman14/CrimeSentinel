'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('regions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
      // Omitting createdAt and updatedAt since timestamps are false.
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('regions');
  }
};
