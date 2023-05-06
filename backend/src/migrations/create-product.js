'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        brand: {
            type: Sequelize.TINYINT
        },
        image: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Products');
  }
};