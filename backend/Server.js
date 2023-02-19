const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/todo-route.js")
const cors = require('cors')
require("dotenv")



const app = express()

const PORT = process.env.port || 8800


app.use(express.json())
app.use(cors())



mongoose.connect("mongodb+srv://tochukwu:tobytc6tochiudeh23@nodeexpressproject.doovzr9.mongodb.net/TODO?retryWrites=true&w=majority")
.then(() => console.log(`connected to mongoDb`))
.catch(err => console.log(err))

app.use(routes)





app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`);
})