'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('boards', [
      {
        name: 'Team 1 board',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        teamId: 1,
        workspaceId: 3,
      },
      {
        name: 'Team 2 board',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        teamId: 2,
        workspaceId: 2,
      },
      {
        name: 'Team 3 board',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        teamId: 3,
        workspaceId: 1,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('boards');
  },
};
