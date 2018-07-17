import axios from 'axios'

// Action Types
const GOT_TIMELINE = 'GOT_TIMELINE'
const TIMELINE_DAY_ADDED = 'TIMELINE_DAY_ADDED'

// Action Creators
const gotDays = days => ({
  type: GOT_TIMELINE,
  days
})

const dayAdded = day => ({
  type: TIMELINE_DAY_ADDED,
  day
})

// Thunks
const fetchTimeline = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/timeline')
    dispatch(gotDays(data))
  }
}

// const addDay = (date, focus) => {
//   return async dispatch => {
//     try {
//       await axios.post('/api/timeline/add/day', {
//         date:
//       })
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }
// }


export {
  GOT_TIMELINE,
  fetchTimeline,
}
