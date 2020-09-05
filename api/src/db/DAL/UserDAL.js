const models = require("../models");

const User = models.User;

async function createUser(userDetails) {
  const createdUser = await User.create(userDetails);
  return createdUser;
}

async function userExists(userid) {
  const exists = await User.findOne({ where: { id: userid } });
  return exists;
}

async function getUserByEmail(email) {
  const user = await User.findOne({ where: { email } });
  return user;
}

module.exports = {
  createUser,
  userExists,
  getUserByEmail,
};
