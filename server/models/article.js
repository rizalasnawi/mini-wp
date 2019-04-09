const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    createdAt : {
        type : String
    },
    author : String,
    featuredImage : {
        type : String,
        required : true
    },
    UserId : String
})

const Article = mongoose.model('Article', articleSchema);


module.exports = Article