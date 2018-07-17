'use strict'

const {db} = require('./server/db')
const app = require('./server')
const PORT = 2000

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`App running on port: ${PORT}`))
  })
