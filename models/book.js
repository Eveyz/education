/* 
 * @author: znz
*/

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    created_at: Date,
    updated_at: Date
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;