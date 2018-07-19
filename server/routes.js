'use strict'

const path = require('path')

// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        // res.render('index.ejs'); // load the index.ejs file
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        // res.render('login.ejs', { message: req.flash('loginMessage') });
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        // res.render('signup.ejs', { message: req.flash('signupMessage') });
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // app.post('/signup', passport.authenticate('local-signup', {
    //   successRediret: '/timeline/add', // redirect to the secure profile section
    //   failureRediret: '/signup', // redirect back to the signup page if there is an error
    //   failureFlah: true // allow flash messages
    // }), (req, res, next) => {
    //   console.log('inside of the signup post route')
    // })

    app.post('/signup', (req, res, next) => {
      console.log('inside of the signup post route')
    })

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        // res.render('profile.ejs', {
        //     user : req.user // get the user out of session and pass to template
        // });
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
