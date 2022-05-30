const { connect } = require("mongoose");
require("dotenv").config();
const HashIds = new (require("hashids"))(process.env.HashKey);
const MongoURL = process.env.MongoURL;

(async () => {
    try {
        const db = await connect(MongoURL);
        console.log("DB connected to", db.connection.name);
    }
    catch (err){
        console.error(err);
    }
})()

module.exports = class {
};