const v1 = require('express').Router();
const entries = require("./entries");

v1.use("/entries", entries);

module.exports = v1;