'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('GreenBecks', [
      {
        name: 'John Doe',
        age: 25,
        email: 'john@example.com',
        createdAt: new Date('2025-02-18T18:50:04'),
        updatedAt: new Date('2025-02-18T18:50:04'),
      },
      {
        name: 'Saint Maximin',
        age: 32,
        email: 'newcastle@example.com',
        createdAt: new Date('2025-02-18T19:14:47'),
        updatedAt: new Date('2025-02-18T19:14:47'),
      },
      {
        name: 'Anthony Gordon',
        age: 24,
        email: 'pigeons@example.com',
        createdAt: new Date('2025-02-18T19:15:29'),
        updatedAt: new Date('2025-02-18T19:15:29'),
      },
      {
        name: 'De Gea',
        age: 34,
        email: 'deGea@example.com',
        createdAt: new Date('2025-02-19T01:34:18'),
        updatedAt: new Date('2025-02-19T01:34:18'),
      },
      {
        name: 'Oblak',
        age: 45,
        email: 'slovenia@example.com',
        createdAt: new Date('2025-02-19T01:34:18'),
        updatedAt: new Date('2025-02-19T01:34:18'),
      },
      {
        name: 'Sam Altman',
        age: 22,
        email: 'openAI@example.com',
        createdAt: new Date('2025-02-19T01:34:18'),
        updatedAt: new Date('2025-02-19T01:34:18'),
      },
      {
        name: 'Jose Mourinho',
        age: 55,
        email: 'chelsea@example.com',
        createdAt: new Date('2025-02-18T21:23:08'),
        updatedAt: new Date('2025-02-18T21:23:08'),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GreenBecks', null, {});
  }
};
