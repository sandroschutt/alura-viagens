"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John",
          lastName: "Doe",
          role: 3,
          profession: "desenvolvedor",
          email: "john@doe.com",
          password: "123456",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjKr5DzVOgSLgs_j-v5Y-l8w0eSgRxoPmL-ZyoJV3xzwunHayuVk-WKHRL3APr9fohbA&usqp=CAU",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alice",
          lastName: "Smith",
          role: 2,
          profession: "Software Engineer",
          email: "alice@example.com",
          password: "password123",
          avatar: "https://example.com/alice.jpg",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bob",
          lastName: "Johnson",
          role: 1,
          profession: "Frontend Developer",
          email: "bob@example.com",
          password: "bobpassword",
          avatar: "https://example.com/bob.jpg",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Emily",
          lastName: "Davis",
          role: 3,
          profession: "UI/UX Designer",
          email: "emily@example.com",
          password: "emilypassword",
          avatar: "https://example.com/emily.jpg",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Michael",
          lastName: "Brown",
          role: 2,
          profession: "Back-end Developer",
          email: "michael@example.com",
          password: "michaelpass",
          avatar: "https://example.com/michael.jpg",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olivia",
          lastName: "Wilson",
          role: 1,
          profession: "Full Stack Developer",
          email: "olivia@example.com",
          password: "oliviapassword",
          avatar: "https://example.com/olivia.jpg",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "David",
          lastName: "Lee",
          role: 3,
          profession: "DevOps Engineer",
          email: "david@example.com",
          password: "davidpass",
          avatar: "https://example.com/david.jpg",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sophia",
          lastName: "Anderson",
          role: 2,
          profession: "Data Scientist",
          email: "sophia@example.com",
          password: "sophiapass",
          avatar: "https://example.com/sophia.jpg",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "William",
          lastName: "Taylor",
          role: 1,
          profession: "Frontend Developer",
          email: "william@example.com",
          password: "williampassword",
          avatar: "https://example.com/william.jpg",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ella",
          lastName: "Martinez",
          role: 3,
          profession: "Product Manager",
          email: "ella@example.com",
          password: "ellapass",
          avatar: "https://example.com/ella.jpg",
          status: 1,
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
