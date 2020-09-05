module.exports = (sequelize, DataTypes) => {
  const Attatchment = sequelize.define("Attatchment", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    applicantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        as: "applicant",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    attatchmentURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Attatchment.associate = (models) => {
    models.User.hasMany(
      models.Attatchment,
      {
        as: "applicant",
        foreignKey: "applicantId",
      },
      {
        onDelete: "CASCADE",
      }
    );
  };

  return Attatchment;
};
