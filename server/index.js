'use strict'

const express = require('express')
const app = express()
const path = require('path')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session')
const passport = require('passport');
const flash = require('connect-flash');


// logging middleware
app.use(volleyball)

app.use(cookieParser())

// body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({secret: 'yeahyeahuuuuhuhhhh8989'}))
app.use(passport.initialize())
app.use(passport.session()) // persisten login sessions
app.use(flash()) // use connect-flash for flash messages stored in session


// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api')) // include our routes!

// app.get('/login', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// })


require('./passport/local')(passport) // pass passport for local user configuration


// app.use('/', require('./routes'))
require('./routes')(app, passport)


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
