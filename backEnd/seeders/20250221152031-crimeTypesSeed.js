'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CrimeTypes', [
      { id: 1, name: 'Assault', severity_level: 'High', category_id: 1 },
      { id: 2, name: 'Homicide', severity_level: 'Critical', category_id: 1 },
      { id: 3, name: 'Kidnapping', severity_level: 'Critical', category_id: 1 },
      { id: 4, name: 'Manslaughter', severity_level: 'High', category_id: 1 },
      { id: 5, name: 'Robbery', severity_level: 'Moderate', category_id: 1 },

      { id: 6, name: 'Burglary', severity_level: 'Moderate', category_id: 2 },
      { id: 7, name: 'Arson', severity_level: 'High', category_id: 2 },
      { id: 8, name: 'Vandalism', severity_level: 'Low', category_id: 2 },
      { id: 9, name: 'Trespassing', severity_level: 'Low', category_id: 2 },
      { id: 10, name: 'Car Theft', severity_level: 'Moderate', category_id: 2 },

      { id: 11, name: 'Identity Theft', severity_level: 'High', category_id: 3 },
      { id: 12, name: 'Online Fraud', severity_level: 'Moderate', category_id: 3 },
      { id: 13, name: 'Hacking', severity_level: 'High', category_id: 3 },
      { id: 14, name: 'Phishing', severity_level: 'Moderate', category_id: 3 },
      { id: 15, name: 'Cyberstalking', severity_level: 'Low', category_id: 3 }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CrimeTypes', null, {});
  }
};
