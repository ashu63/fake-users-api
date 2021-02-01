const mongoose = require('mongoose');

const demoTodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
})

const TodoData = new mongoose.model("TodoData", demoTodoSchema);
module.exports = TodoData;
