module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Metrics', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      patient: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      notes: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Metrics');
  },
};
