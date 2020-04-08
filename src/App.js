import React, { Component } from 'react';
import Home from './Home.js'
import './App.css';
import Navbar from './Navbar.js'
import DriverPage from './DriverPage.js'

import {Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <BrowserRouter >
      <Route exact path="/" component={Home} />
      <Route exact path="/driver" component={DriverPage} />

    </BrowserRouter >

    </div>

  );
}

export default App;
