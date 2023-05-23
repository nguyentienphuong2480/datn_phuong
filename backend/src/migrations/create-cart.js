'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerID: {
        type: Sequelize.INTEGER
      },
      productID: {
        type: Sequelize.STRING
      },
      image:{
        type: Sequelize.STRING
      },
      productName: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      unitPrice: {
        type: Sequelize.FLOAT
      },
      totalPrice: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Carts');
  }
};