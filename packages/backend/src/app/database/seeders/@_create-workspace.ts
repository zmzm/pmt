'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('workspaces', [
      {
        name: 'Workspace 1',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Workspace 2',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Workspace 3',
        closed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('boards');
  },
};
