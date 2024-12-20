'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Users', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       username: Sequelize.STRING,
       passwordHash: Sequelize.STRING
     });
  },

  async down (queryInterface) {
     await queryInterface.dropTable('Users');
  }
};
