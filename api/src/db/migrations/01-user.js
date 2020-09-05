module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("User", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photoAlbum: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      stateOfOrigin: {
        type: Sequelize.STRING,
      },
      userType: {
        type: Sequelize.STRING,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }),
  down: (queryInterface) => queryInterface.dropTable("User"),
};
