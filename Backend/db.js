//mongodb+srv://premtheja:Theja@1277@todo-app.kjkvwlc.mongodb.net/
const mongoose = require('mongoose');
const { boolean } = require('zod');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean, // Define a field of type boolean
        default: false // Optionally set a default value
    }
});

// const updateSchema = new mongoose.Schema({
//     id: {
//         type: String,
//         required: true
//     }
// });

// Create a model based on the schema
const Todo = mongoose.model('Todo', todoSchema);
//const Update = mongoose.model('Update', updateSchema); 

module.exports =Todo
