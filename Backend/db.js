//mongodb+srv://premtheja:Theja@1277@todo-app.kjkvwlc.mongodb.net/
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://premthejapamula:Theja1277@cluster0.pd7rbti.mongodb.net/")
   .then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});



const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,  // Make sure to mark it as required
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
