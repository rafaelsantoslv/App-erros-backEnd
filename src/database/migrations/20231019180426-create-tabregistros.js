'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("tabRegistros", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        unique: true
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      tipo: {
        type: Sequelize.ENUM({
          values: ["ERRO", "ACERTO"]
        })
      },
      observacao: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('tabRegistros');
     
  }
};
