"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Messages", "recipient", {
      type: Sequelize.STRING,
      allowNull: false, // Specify any other options for the column
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Messages", "recipient", {
      type: Sequelize.JSON,
      allowNull: false, // Revert any other options for the column
    });
  },
};
