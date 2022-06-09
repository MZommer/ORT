
const entries = require("express").Router();
const DB = require.main.require("./services/db.js");

entries.route("/")
    .get(async (req, res, next) => {
        res.json(await DB.read_entries());
        next();
    })
    .post(async (req, res, next) => {
        res.send(await DB.create_entry(req.body));
        next();
    })
entries.route("/:entryId")
    .get(async (req, res, next) => {
        res.json(await DB.read_entry(req.params.entryId));
        next();
    })
    .put(async (req, res, next) => {
        res.send(await DB.update_entry(req.body, req.params.entryId));
        next();
    })
    .delete(async (req, res, next) => {
        res.json(await DB.delete_entry(req.params.entryId));
        next();
    })
module.exports = entries;