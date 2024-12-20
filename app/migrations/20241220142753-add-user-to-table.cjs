'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'admin',
      passwordHash: "$2a$10$D8EPSPLeDeThQVSXOa80FextKTazNNpPyS5Tc3YymIsb0Y5zU1glS"
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', [{
      username: 'admin',
      passwordHash: "$2a$10$D8EPSPLeDeThQVSXOa80FextKTazNNpPyS5Tc3YymIsb0Y5zU1glS"
    }]);
  }
};
