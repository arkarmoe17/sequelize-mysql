'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        dob: new Date(),
        email: 'john@email.com',
        uuid: '54a9992b-a1bd-4252-8dd8-2b91b2b96fe8',
        role: 'admin',
        createdAt: '2022-08-27T09:21:03.000Z',
        updatedAt: '2022-08-27T09:21:03.000Z',
      },
      {
        name: 'Jane Doe',
        dob: new Date(),
        email: 'jane@email.com',
        uuid: 'fe76248b-e9e9-4b5e-af86-c585362b997b',
        role: 'user',
        createdAt: '2022-08-27T09:22:50.000Z',
        updatedAt: '2022-08-27T09:22:50.000Z',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
