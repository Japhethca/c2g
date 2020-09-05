const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function createToken(payload, expiryTime = "1day") {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiryTime,
  });
  return token;
}

function validateToken(token) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

module.exports = {
  createToken,
  validateToken,
};
