'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('workspaces', [
      {
        name: 'Workspace 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Workspace 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Workspace 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('workspaces');
  },
};
