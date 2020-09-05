const express = require("express");
const joi = require("joi");
const JoiDate = require("@hapi/joi-date");

const authMiddleware = require("./middlewares/auth");
const validate = require("./routeValidator");
const authHandlers = require("./handlers/auth");
const applicationHandlers = require("./handlers/licence-application");

const joiDate = joi.extend(JoiDate);

const root = express.Router();

const authRoutes = express.Router();
authRoutes.post(
  "/login",
  validate({
    body: joi.object({
      password: joi.string().required(),
      email: joi.string().email().required(),
    }),
  }),
  authHandlers.login
);

authRoutes.post(
  "/signup",
  validate({
    body: joi.object({
      password: joi.string().required(),
      email: joi.string().email().required(),
      firstName: joi.string().required(),
      lastName: joi.string().required(),
      photoAlbum: joi.string().required(),
      sex: joi.string().required(),
      stateOfOrigin: joi.string().required(),
      userType: joi.string().required(),
      dateOfBirth: joi.date().required(),
    }),
  }),
  authHandlers.signup
);

root.use("/auth", authRoutes);

const applicationRoutes = express.Router();
applicationRoutes.use(authMiddleware);
applicationRoutes
  .route("/")
  .post(
    validate({
      body: joi.object({
        type: joi.string().required(),
        driverTestScore: joi.number().required(),
        state: joi.string().required(),
        status: joi.string().required(),
        firstTime: joi.boolean().required(),
        applicantAddress: joi.string().required(),
      }),
    }),
    applicationHandlers.newApplication
  )
  .get(
    validate({
      query: joi.object({
        status: joi.string().optional(),
      }),
    }),
    applicationHandlers.allApplication
  );
applicationRoutes.put("/:id/status", applicationHandlers.updateStatus);

root.use("/applications", applicationRoutes);

module.exports = root;
