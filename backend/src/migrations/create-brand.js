'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Brands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.TINYINT
      },
      name: {
        type: Sequelize.STRING
      },
      image:{
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.TINYINT,
        defaultValue:1
      },
      trash:{
        type: Sequelize.TINYINT,
        defaultValue:0
      },
      createdAt: {
        type: 'DATETIME',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: 'DATETIME',
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Brands');
  }
};