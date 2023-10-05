require("dotenv").config()
const mongoose = require("mongoose")
const {populate_data} = require("../populate")

const setup_db  = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(() => {
            populate_data()
        }).catch((err) => {
            console.log(err)
        })
    } catch (error) {
        console.log("connection error")
    }
}

module.exports = {setup_db}