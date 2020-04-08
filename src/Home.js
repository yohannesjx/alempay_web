

import React, { Component } from 'react';
import Apply from './Apply.js'
import Footer from './Footer.js'
import City from './img/city.gif'
import Navbar from './Navbar.js'
import css from './Navbar.css'

export default class Home extends Component {
    constructor(props){
      super(props)

    }

    render() {
      return (
        <div>
        <Navbar page="home"/>
        <img src={City} className="picture">
        </img>
        <Apply />
        <Footer />
        </div>
      )
    }
}
