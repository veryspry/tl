import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

// views
import Navbar from './Navbar'


const Main = () => {

    return (
      <div>
        <Navbar />
      </div>
    )
}

export default Main
