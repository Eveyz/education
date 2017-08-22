/* 
 * @author: znz
*/

var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    created_at: Date,
    updated_at: Date
});

var Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;