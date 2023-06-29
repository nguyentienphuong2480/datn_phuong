'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      customerID: {
        type: Sequelize.INTEGER
      },
      name:{
        type: Sequelize.STRING
      },
      phone:{
        type: Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING
      },
      deliveryAddress :{
        type: Sequelize.STRING
      },
      totalPrice: {
        type: Sequelize.FLOAT
      },
      status:{
        type: Sequelize.TINYINT,
        defaultValue: 1
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
    await queryInterface.dropTable('Orders');
  }
};