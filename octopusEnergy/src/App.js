import React from 'react';

import NavBar from './components/NavBar';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';

import './css/app.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <ProductListing />
        <Footer />
      </div>
    )
  }
}

export default App;