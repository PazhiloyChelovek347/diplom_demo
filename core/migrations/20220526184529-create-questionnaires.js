module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questionnaires', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      questions: {
        type: Sequelize.JSON,
      },
      patient: {
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
    await queryInterface.dropTable('Questionnaires');
  },
};
