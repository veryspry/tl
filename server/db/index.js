const db = require('./db')
// const Sequelize = require('sequelize')

const Coffee  = require('./models/coffee')
const Day  = require('./models/day')
const Music  = require('./models/music')
const Resource  = require('./models/resource')


// // Models
// const Day = db.define('days', {
//   date: {
//     type: Sequelize.DATE,
//     allowNull: false
//   },
//   focus: {
//     type: Sequelize.TEXT,
//   }
// })
//
// const Resource = db.define('resources', {
//   name: {
//     type: Sequelize.TEXT
//   },
//   resourceUrl: {
//     type: Sequelize.TEXT,
//     validate: {
//       isUrl: true
//     }
//   }
// })
//
// const Coffee = db.define('coffee', {
//   name: {
//     type: Sequelize.TEXT
//   },
//   roaster: {
//     type: Sequelize.TEXT
//   }
// })
//
// const Music = db.define('music', {
//   album: {
//     type: Sequelize.TEXT,
//   },
//   song: {
//     type: Sequelize.TEXT,
//   },
//   artist: {
//     type: Sequelize.TEXT,
//   }
// })

Resource.belongsTo(Day)
Day.hasMany(Resource)

Coffee.belongsTo(Day)
Day.hasMany(Coffee)

Music.belongsTo(Day)
Day.hasMany(Music)

module.exports = { db, Day, Resource, Coffee, Music }
