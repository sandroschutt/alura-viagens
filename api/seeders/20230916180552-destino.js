"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "destinos",
      [
        {
          name: "Argentina",
          photo: "https://dummyphoto.com/photo",
          price: 4932.84,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://dummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
        },
        {
          name: "Brazil",
          photo: "https://dummyphoto.com/photo",
          price: 4549.11,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://dummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
        },
        {
          name: "Chile",
          photo: "https://dummyphoto.com/photo",
          price: 3866.28,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://dummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
        },
        {
          name: "Colombia",
          photo: "https://dummyphoto.com/photo",
          price: 5445.68,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://dummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
        },
        {
          name: "Mexico",
          photo: "https://dummyphoto.com/photo",
          price: 5628.35,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://dummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
        },
        {
          name: "Peru",
          photo: "https://dummyphoto.com/photo",
          price: 5417.07,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://dummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
        },
        {
          name: "Venezuela",
          photo: "https://dummyphoto.com/photo",
          price: 3861.72,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://ummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
        },
        {
          name: "Uruguay",
          photo: "https://dummyphoto.com/photo",
          price: 5217.91,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://dummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
        },
        {
          name: "Ecuador",
          photo: "https://dummyphoto.com/photo",
          price: 5013.23,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://dummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
        },
        {
          name: "Bolivia",
          photo: "https://dummyphoto.com/photo",
          price: 4607.39,
          createdAt: new Date(),
          updatedAt: new Date(),
          photo2: "https://dummyphoto.com/somephoto",
          meta: "Meta description about the photo",
          description: "The destination description",
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
