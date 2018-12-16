import React, { Component } from 'react';
var Nav = require('./Nav');

function Roll(die) {
  var min = Math.ceil(1);
  var max = Math.floor(die);
  var x1 = Math.floor(Math.random() * (max - min + 1)) + min;
  var x2 = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.round((x1+x2)/2)

}



class Curve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      die: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDie = this.setDie.bind(this);
  }

//only here for testing purposes
  rollTesting() {
    var i;
    var foo = {
      one:0,
      two:0,
      three:0,
      four:0,
      five:0,
      six:0,
      seven:0,
      eight:0,
      nine:0,
      ten:0
    }
    for (i = 0; i < 100000; i++) {
      var e = Roll(10)
      e === 1
        ? foo.one += 1
        : e === 2
          ? foo.two += 1
          : e === 3
            ? foo.three += 1
            : e === 4
              ? foo.four += 1
              : e === 5
                ? foo.five += 1
                : e === 6
                  ? foo.six += 1
                  : e === 7
                    ? foo.seven += 1
                    : e === 8
                      ? foo.eight += 1
                      : e === 9
                        ? foo.nine += 1
                        : e === 10
                          ? foo.ten += 1
                          : foo.ten += 0
    }
    console.log(foo)
    return foo
  }
//end testing

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
        <p className='subHeader'>Curved Dice</p>
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
        <br/>

        <p className='result'>{this.state.result ? this.state.result : null}</p>
      </div>
    );
  }
}

export default Curve;
