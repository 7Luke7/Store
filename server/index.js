require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const {setup_db} = require("./db/connectDB")
const {router} = require("./routes/route")

app.use(cors())
app.use(express.json())
app.use("/store", router)

const concat = async () => {
    try {
        await setup_db()
        app.listen(8080, () => {
            console.log(`Listening on port 8080`)
        })
    } catch (error) {
        console.log(error)
    }
}

concat()