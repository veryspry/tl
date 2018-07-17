const db = require('../db')
const Sequelize = require('sequelize')

const Day = db.define('days', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  focus: {
    type: Sequelize.TEXT,
  }
})

module.exports = Day
