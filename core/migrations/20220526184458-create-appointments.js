module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      doctorIds: {
        type: Sequelize.STRING,
      },
      patient: {
        type: Sequelize.STRING,
      },
      diagnosis: {
        type: Sequelize.STRING,
      },
      consultationDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.STRING,
      },
      clinic: {
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
    await queryInterface.dropTable('Appointments');
  },
};
