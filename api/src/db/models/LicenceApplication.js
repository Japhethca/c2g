module.exports = (sequelize, DataTypes) => {
  const LicenceApplication = sequelize.define("LicenceApplication", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    applicantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driverTestScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      // validate: {
      //   isIn: {
      //     args: [
      //       "PENDING",
      //       "REJECTED",
      //       "REVIEWER_APPROVED",
      //       "PROCESSOR_APPROVED",
      //     ],
      //   },
      // },
    },
    firstTime: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    applicantAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  LicenceApplication.associate = (models) => {
    models.User.hasMany(
      models.LicenceApplication,
      {
        as: "applicant",
        foreignKey: "applicantId",
      },
      {
        onDelete: "CASCADE",
      }
    );
  };
  return LicenceApplication;
};
