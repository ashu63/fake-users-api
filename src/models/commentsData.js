const mongoose = require('mongoose');

const demoCommentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
})

const CommentData = new mongoose.model("CommentData", demoCommentsSchema);
module.exports = CommentData;
