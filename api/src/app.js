const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.use("/api/v1", routes);

module.exports = app;
