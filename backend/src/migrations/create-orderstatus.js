'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderStatus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status:{
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('OrderStatus');
  }
};