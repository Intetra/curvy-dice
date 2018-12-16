import React, { Component } from 'react';
var Nav = require('./Nav');

function Roll(die) {
  var min = Math.ceil(1);
  var max = Math.floor(die);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class NoCurve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      die: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDie = this.setDie.bind(this);
  }

  setDie(event) {
    var value = event.target.value;

    this.setState(function() {
      return {
        die: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState(function() {
      return {
        result: Roll(this.state.die)
      }
    })
  }

  render() {
    return (
      <div className="nocurve">
        <header className="nocurve-header">
          <Nav />
        </header>
        <p className='subHeader'>Regular Dice</p>
        <form className='rollForm' onSubmit={this.handleSubmit}>
          <button value='2' onClick={this.setDie} id='D2' className='button' type='submit'>Roll d2</button>
          <button value='4' onClick={this.setDie} id='D4' className='button' type='submit'>Roll d4</button>
          <button value='6' onClick={this.setDie} id='D6' className='button' type='submit'>Roll d6</button>
          <button value='8' onClick={this.setDie} id='D8' className='button' type='submit'>Roll d8</button>
          <button value='10' onClick={this.setDie} id='D10' className='button' type='submit'>Roll d10</button>
          <button value='12' onClick={this.setDie} id='D12' className='button' type='submit'>Roll d12</button>
          <button value='20' onClick={this.setDie} id='D20' className='button' type='submit'>Roll d20</button>
          <button value='100' onClick={this.setDie} id='D100' className='button' type='submit'>Roll d100</button>
        </form>

        <p className='result'>{this.state.result ? this.state.result : null}</p>
      </div>
    );
  }
}

export default NoCurve;
