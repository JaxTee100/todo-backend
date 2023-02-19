const mongoose = require("mongoose")


const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'must provide name'],
        trim:true,
        maxlength: [20,'name cannot be more than 20 characters']
    }
})

module.exports = mongoose.model("Todo", todoSchema)