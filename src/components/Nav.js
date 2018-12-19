var React = require('react');
var NavLink = require('react-router-dom').NavLink;



function Nav () {
  return (
    <div className='navBar'>
      <ul className='nav'>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            <div className='navlink'>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/curve'>
            <div className='navlink'>Curved Dice</div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/nocurve'>
            <div className='navlink'>Uncurved Dice</div>
          </NavLink>
        </li>
      </ul>
    </div>
  )

}

module.exports = Nav;
