import React from 'react';

import OctopusLogo from '../assets/octopus-energy-logo.svg'

class NavBar extends React.Component {
  render () {
    return (
      <div className='nav-bar'>
        <div className='logo-box'>
          <img src={OctopusLogo} />
        </div>
        <i className='material-icons'>menu</i>
      </div>
    )
  }
}

export default NavBar;