'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ProductDetails', {
            id: {
                allowNull:false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            img1: {
                type: Sequelize.STRING
            },
            img2: {
                type: Sequelize.STRING
            },
            img3: {
                type: Sequelize.STRING
            },
            img4: {
                type: Sequelize.STRING
            },
            img5: {
                type: Sequelize.STRING
            },
            img6: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('ProductDetails');
    }
};