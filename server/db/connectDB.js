require("dotenv").config()
const mongoose = require("mongoose")
const {populate_data} = require("../populate")

const setup_db  = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        await populate_data()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {setup_db}