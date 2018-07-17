import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

import { GOT_TIMELINE } from './redux/actions'


const initialState = {
  timeline: [],
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_TIMELINE:
      return {...state, timeline: action.days}
    default:
      return state
  }
}


export default createStore(
  reducer,
  applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  )
)
