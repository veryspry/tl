const db = require('./db')

const Coffee  = require('./models/coffee')
const Day  = require('./models/day')
const Music  = require('./models/music')
const Resource  = require('./models/resource')
const User = require('./models/user')


Resource.belongsTo(Day)
Day.hasMany(Resource)

Coffee.belongsTo(Day)
Day.hasMany(Coffee)

Music.belongsTo(Day)
Day.hasMany(Music)

module.exports = { db, Day, Resource, Coffee, Music, User }
