module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Attatchment", {
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
      attatchmentURL: {
        type: Sequelize.STRING,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }),
  down: (queryInterface) => queryInterface.dropTable("Attatchment"),
};
