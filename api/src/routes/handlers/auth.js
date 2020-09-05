const { UserDAL } = require("../../db/DAL");
const { createToken } = require("../../helpers/jwt");
const { comparePassword, hashPassword } = require("../../helpers/bcrypt");

async function login(req, res) {
  const { email, password } = req.body;
  let user;
  try {
    user = await UserDAL.getUserByEmail(email);
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while processing this request",
    });
  }
  if (!user || !comparePassword(password, user.password)) {
    return res.status(401).json({
      message: "Invalid Authentication credentials",
    });
  }
  const token = createToken({ user: { id: user.id } });
  return res.status(200).json({
    message: "successful",
    user,
    token,
  });
}

async function signup(req, res) {
  try {
    const userdata = { ...req.body, password: hashPassword(req.body.password) };
    const user = await UserDAL.createUser(userdata);
    // TODO: check if user already exist
    const token = createToken({ user: { id: user.id } });
    return res.status(201).json({
      message: "successful",
      user: user,
      token: token,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong while processing this request" });
  }
}

module.exports = {
  login,
  signup,
};
