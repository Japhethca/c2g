const { validateToken } = require("../../helpers/jwt");
const { userExists } = require("../../db/DAL").UserDAL;

async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader.split().length < 1) {
    return res
      .status(400)
      .json({ message: "No authorization header specified" });
  }

  const jwtToken = req.headers.authorization.split(" ")[1];
  const decoded = validateToken(jwtToken);
  const user = await userExists(decoded.user.id);
  if (!decoded.user.id && !user) {
    return res
      .status(400)
      .json({ message: "Invalid Authentication credentials" });
  }
  req.user = user.toJSON();
  return next();
}

module.exports = authMiddleware;
