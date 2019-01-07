const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const PostSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    imageid: [{
        type: String,
        required: false
    }],
    imageurl: [{
        type: String,
        required: false
    }]
});

module.exports = Post = mongoose.model('Post', PostSchema);