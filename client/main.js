import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Main from './components/root'

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  // <h1>hey there</h1>,
  document.getElementById('main')
)
