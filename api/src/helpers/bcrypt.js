const bcrypt = require("bcrypt");

const SALT = 10;

function hashPassword(password) {
  const hashed = bcrypt.hashSync(password, SALT);
  return hashed;
}

function comparePassword(password, hashed) {
  return bcrypt.compareSync(password, hashed);
}

module.exports = {
  hashPassword,
  comparePassword,
};
