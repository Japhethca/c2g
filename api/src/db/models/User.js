module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "First Name is required",
          min: 2,
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Last Name is required",
          min: 2,
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email is not valid",
        },
      },
    },
    password: { type: DataTypes.STRING },
    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photoAlbum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
    },
    stateOfOrigin: {
      type: DataTypes.STRING,
    },
    userType: {
      type: DataTypes.STRING,
      defaultValue: "APPLICANT",
      validate: {
        isIn: {
          args: ["APPLICANT", "REVIEWER", "PROCESSOR"],
          msg: "userType must one of [APPLICANT, REVIEWER, PROCESSOR]",
        },
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return User;
};
