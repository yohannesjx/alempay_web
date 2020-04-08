import React, { Component } from 'react';
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import Apply from './Apply.js'
import css from './Navbar.css'

export default class DriverPage extends Component {
    constructor(props){
      super(props)

    }

    render() {
      return (
        <div>
        <Navbar page="driver" />
        <Apply />
        <Footer />
        </div>
      )
    }
}
