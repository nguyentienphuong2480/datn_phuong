'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderID: {
        type: Sequelize.STRING
      },
      productID: {
        type: Sequelize.STRING
      },
      quantity:{
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('OrderDetails');
  }
};