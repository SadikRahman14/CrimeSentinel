'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      longitude: {
        type: Sequelize.STRING,
        allowNull: true
      },
      latitude: {
        type: Sequelize.STRING,
        allowNull: true
      },
      region_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'regions', // references the regions table
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      }
      // Omitting createdAt and updatedAt since timestamps are false.
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('locations');
  }
};
