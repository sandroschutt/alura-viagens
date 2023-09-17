"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "depoimentos",
      [
        {
          userId: 1,
          content: "Some comment the user posted about trips",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          content: "Another comment about the latest trip",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          content: "Comment on travel experience",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          content: "Thoughts on the recent vacation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          content: "Travel review and recommendations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
