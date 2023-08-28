require("dotenv").config()
const mongoose = require("mongoose")
const {populate_data} = require("../populate")

const setup_db  = async () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("db connected")
    })
    await populate_data()
}

module.exports = {setup_db}