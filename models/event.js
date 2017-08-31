/* 
 * @author: znz
*/

var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    duration: String,
    created_at: Date,
    updated_at: Date
});

eventSchema.pre("save", function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;
    if ( !this.created_at ) {
      this.created_at = currentDate;
    }
    next();
});

var Event = mongoose.model('Book', eventSchema);
module.exports = Event;