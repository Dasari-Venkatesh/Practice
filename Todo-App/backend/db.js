const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mymongoadmin:password@cluster0.1reeplm.mongodb.net/Todos").then(() =>{console.log("connected")})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}