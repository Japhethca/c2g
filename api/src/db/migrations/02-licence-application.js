module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("LicenceApplication", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      applicantId: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          as: "applicant",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      driverTestScore: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstTime: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      applicantAddress: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      geolocation: {
        type: Sequelize.STRING,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }),
  down: (queryInterface) => queryInterface.dropTable("LicenceApplication"),
};
