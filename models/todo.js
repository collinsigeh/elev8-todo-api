const mongoose = require('mongoose');
const mySchema = mongoose.Schema;

const Todo = mongoose.model('Todo', mySchema({
    actionBy: {type: String, required: true},
    task: {type: String, required: true},
    status: {type: String, default: 'Pending'}
}));

module.exports = Todo;