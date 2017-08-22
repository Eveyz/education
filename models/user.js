/* 
 * @author: znz
*/

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  local: {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
    created_at: Date,
    updated_at: Date
  }
});

userSchema.pre("save", function(next){
  var currentDate = new Date();
  this.local.updated_at = currentDate;
  if ( !this.local.created_at ) {
    this.local.created_at = currentDate;
  }
  next();
});

userSchema.methods.dudify = function() {
  this.username = this.username + '-dude';
  return this.username;
};

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
