const { connect } = require("mongoose");
require("dotenv").config();
const HashIds = new (require("hashids"))(process.env.HashKey);
const MongoURL = process.env.MongoURL;
const Entry = require("../models/Entry");
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
    static async read_entries(){
        return await Entry.find();
    }
    static async read_entry(id){
        return await Entry.findById(HashId.decodeHex(id));
    }
    static async create_entry(_entry){
        return HashIds.encodeHex((await Entry.create(_entry)));
    }
    static async update_entry(update, id){
        return HashIds.encodeHex(await Entry.findByIdAndUpdate({ _id: HashId.decodeHex(id) }, update, { new: true })._id.toString());
    }
    static async delete_entry(id){
        await Entry.deleteOne({ _id: HashId.decodeHex(id) });
        return { success: true, message: "Entry deleted" }
    }
};