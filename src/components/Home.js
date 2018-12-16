import React, { Component } from 'react';
import '../static/home.css';
var Nav = require('./Nav');

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <Nav />
        </header>
        <p className='subHeader'>A web app for rolling dice. This is still under construction, there will be more here later.</p>
      </div>
    );
  }
}

export default Home;
