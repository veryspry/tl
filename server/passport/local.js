// config/passport.js

// load all the things we need
const LocalStrategy   = require('passport-local').Strategy

// load up the user model
const User = require('../db')

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
      console.log('inside serialize loggin user --', user);
        done(null, user.id)
    })

    // used to deserialize the user
    passport.deserializeUser(async function(id, done) {
      try {
        const user = await User.findById(id)
        done(null, user)
      }
      catch (err) {
        done(err)
      }

    })

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(async function() {

          // find a user whose email is the same as the forms email
          // we are checking to see if the user trying to login already exists
          try {
            const user = await User.findOne({ where: {email: email}})
            console.log('inside use local-signup', user, email, password);
              // check to see if theres already a user with that email
              if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'))
              }
              else {
                // if there is no user with that email
                // create the user
                try {
                  const newUser = await User.create({email: email, password: password})
                  return done(null, newUser)
                }
                catch (error) {
                  throw (error)
                }
              }

          }
          catch (err) {
            done(err) // if there are any errors, return the error
          }

        })

    }))

}
