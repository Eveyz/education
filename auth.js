var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
    User = require('../models/user.js');

// LOCAL SIGNUP ======================
passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, username, password, done) {
    process.nextTick(function() {

    User.findOne({'local.username' : username }, function(err, user){
      if (err)
        return done(err);
      if (user) {
        return done(null, false, req.flash('signupMessages', 'Username is already taken.'));
      } else if (password !== req.body.confirmpassword) {
        return done(null, false, req.flash('signupMessages', 'Not consistent password.'));
      } else {
        var newUser = new User();
        newUser.local.username = username;
        newUser.local.email = req.body.email;
        newUser.local.password = newUser.generateHash(password);

        newUser.save(function(err){
          if (err)
            throw err;
          return done(null, newUser);
        });
      }
    });
    });
  }
));

passport.serializeUser(function(user, done){
  return done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user);
  });
});

// LOCAL LOGIN =============================

passport.use('local-login', new LocalStrategy({
  usernameField : 'username',
  passwordField : 'password',
  passReqToCallback : true
},
function(req, username, password, done) {
  User.findOne({'local.username' : username }, function(err, user){
    if (err)
      return done(err);
    if (!user)
      return done(null, false, req.flash('warning', "用户不存在" ));
    if (!user.validPassword(password))
      return done(null, false, req.flash('warning', "Oops, wrong password."));

    return done(null, user, req.flash('success', "Welcomeback! " + username));
  });
}));

module.exports = passport;
