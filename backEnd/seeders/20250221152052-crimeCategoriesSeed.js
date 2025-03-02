'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('crimecategories', [
      {
        id: 1,
        name: 'Violent Crimes'
      },
      {
        id: 2,
        name: 'Property Crimes'
      },
      {
        id: 3,
        name: 'Cyber Crimes'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('crimecategories', null, {});
  }
};
