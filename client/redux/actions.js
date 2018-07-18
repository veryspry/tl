import axios from 'axios'

// Action Types
const GOT_TIMELINE = 'GOT_TIMELINE'
const DAY_ADDED = 'DAY_ADDED'  // PROBABLY CAN REMOVE THIS

// Action Creators
const gotDays = days => ({
  type: GOT_TIMELINE,
  days
})

const dayAdded = day => ({ // PROBABLY CAN REMOVE THIS
  type: DAY_ADDED,
  day
})

// Thunks

// get entire timeline
const fetchTimeline = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/timeline')
    dispatch(gotDays(data))
  }
}

// add a single day
const addDay = (month, day, year, focus) => {
  return async dispatch => {
    try {
      await axios.post('/api/timeline/add/day', {
          month: month,
          day: day,
          year: year,
          focus: focus,
      })
      // get the new timeline so that redux state updates & react can re-render if necessary
      dispatch(fetchTimeline())
    }
    catch (err) {
      console.log(err)
    }
  }
}

const addCoffee = (name, roaster, dayId) => {
  return async dispatch => {
    try {
      await axios.post('/api/timeline/add/coffee', {
        name,
        roaster,
        dayId,
      })
      dispatch(fetchTimeline())
    }
    catch (err) {
      console.log(err)
    }
  }
}

const addMusic = (album, song, artist, dayId) => {
  return async dispatch => {
    try {
      await axios.post('/api/timeline/add/music', {
        album,
        song,
        artist,
        dayId,
      })
      dispatch(fetchTimeline())
    }
    catch (err) {
      console.log(err)
    }
  }
}

const addResource = (name, resourceUrl, dayId) => {
  return async dispatch => {
    try {
      await axios.post('/api/timeline/add/resource', {
        name,
        resourceUrl,
        dayId,
      })
      dispatch(fetchTimeline())
    }
    catch (err) {
      console.log(err)
    }
  }
}


export {
  GOT_TIMELINE,
  fetchTimeline,
  addDay,
  addCoffee,
  addMusic,
  addResource,
}
