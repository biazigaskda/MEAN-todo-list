const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    text: String
});

let Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;