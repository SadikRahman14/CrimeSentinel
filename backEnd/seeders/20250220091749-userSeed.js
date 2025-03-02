'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: 'deGea@gmail.com',
        password: '$2b$10$EM6SEaq5uBkZLj3LqgTk6O4MKxZP72fqTeMHBpLhHx7xvQo2.phAm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        email: 'oblak@gmail.com',
        password: '$2b$10$689iqblXqKeOUFpuAcJ3D.1elRZoxmCbX14Y/j4jikS41LaR2ST/O',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        email: 'odegaard@gmail.com',
        password: '$2b$10$rkMt8ns1DxzdQUWv3KIWsOYYXiMjcN6/GVD5b83UB/z9bp6a7T82S',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        email: 'saka@gmail.com',
        password: '$2b$10$AnpA4/DpAZB8PvQG73txuOXty87ZSsL3glsT3E6k1FIVIq4w1SVX2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        email: 'schmeichel@gmail.com',
        password: '$2b$10$AHPBWYj.U1.EV2W0rrvGdOAqdM.yMlAShVySaKIvL1BBTPhz/mRSC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        email: 'kasper@gmail.com',
        password: '$2b$10$LvpYysyxviNRwaFJ6KqxOeJ28/N7ejHQGo2OXaRrBTcJD.eKJ3XVC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        email: 'aspia@gmail.com',
        password: '$2b$10$w0OcdhGcH.Zbfth1krvBV.0M0uoh8gET32Ib3NmN2MHZxwnSd6NyW',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
