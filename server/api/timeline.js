const router = require('express').Router()
const { db, Day, Resource, Coffee, Music } = require('../db/index')
module.exports = router


router.get('/', async (req, res, next) => {
  try {
    const response = await Day.findAll({
      include: [
        {model: Resource},
        {model: Coffee},
        {model: Music}
      ]
    })
    res.send(response)
  }
  catch (err) {
    next(err)
  }
})

// curl -d "month=july&day=20&year=2018&focus=I did some stuff and things" -X POST http://localhost:2000/api/timeline/add/day

// add a day
router.post('/add/day', async (req, res, next) => {
  try {
    await Day.create({
      // date: req.body.date,
      month: req.body.month,
      day: req.body.day,
      year: req.body.year,
      focus: req.body.focus,
    })
    res.status(201).send('Day added successfully!')
  }
  catch (err) {
    next(err)
  }
})
