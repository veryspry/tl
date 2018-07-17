import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

// components
import Navbar from './Navbar'
import Timeline from './timeline/Timeline'
import Add from './timeline/AddDay'

const Main = () => {

    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/timeline" component={Timeline}/>
              <Route exact path="/timeline/add" component={Add}/>
            </Switch>
          </div>
        </Router>


      </div>
    )
}

export default Main
