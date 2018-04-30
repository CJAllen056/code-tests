import React from 'react';

import OctopusLogo from '../assets/octopus-energy-logo.png'

class NavBar extends React.Component {
  render () {
    return (
      <div>
        <img src={OctopusLogo} />
        <i className='material-icons'>menu</i>
      </div>
    )
  }
}

export default NavBar;