const db = require('../db') // get our db connection
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt-nodejs')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {

    type: Sequelize.STRING,

    get(password) {
      return bcrypt.compareSync(password, this.getDataValue('password'))
    },
    set(password) { // hash and salt the password
      this.setDataValue('password', bcrypt.hashSync(password, bcrypt.genSaltSync(16), null))
    }
  },
})


module.exports = User
