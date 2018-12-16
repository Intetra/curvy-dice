import React, { Component } from 'react';
import Home from './components/Home.js'
import Curve from './components/Curve.js'
import NoCurve from './components/NoCurve.js'
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/curve' component={Curve} />
            <Route exact path='/nocurve' component={NoCurve} />
            <Route render={function () {
                return <p>Not Found</p>
              }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
