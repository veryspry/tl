import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

// components
import Navbar from './Navbar'
import Timeline from './timeline/Timeline'
import Add from './timeline/AddDay'
import Login from './Login'
import Signup from './Signup'
import Update from './timeline/update/Update'

const Main = () => {

    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/timeline" component={Timeline}/>
              <Route exact path="/timeline/add" component={Add}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route path="/timeline/update/:id" component={Update}/>
            </Switch>
          </div>
        </Router>


      </div>
    )
}

export default Main
