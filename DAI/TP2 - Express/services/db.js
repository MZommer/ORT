const { connect } = require("mongoose");
require("dotenv").config();
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
        return await Entry.findById(id);
    }
    static async create_entry(_entry){
        return (await Entry.create(_entry))._id.toString();
    }
    static async update_entry(update, id){
        return await Entry.findByIdAndUpdate({ _id: id }, update, { new: true });
    }
    static async delete_entry(id){
        await Entry.deleteOne({ _id: id });
        return { success: true, message: "Entry deleted" }
    }
};