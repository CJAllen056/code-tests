import React from 'react';

import EnergySavingBulb from '../assets/energy-saving-lightbulb.jpg';
import Graph from '../assets/graph.png';

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    }
  }

  toggleQuantity(sum) {
    const { quantity } = this.state;
    if (sum) {
      this.setState({
        quantity: quantity + 1,
      })
    } else if (quantity > 1) {
      this.setState({
        quantity: quantity - 1,
      })
    }
  }

  render () {
    return (
      <div className='product-listing'> 
        <div className='img-section'>
          <img src={EnergySavingBulb} />
        </div>
        <div className='header-section'>
          <h1>Energy Saving Bulb</h1>
          <p>25W // Packet of 4</p>
        </div>
        <div className='price-section'>
          <div>
            <h1>£12<small>.99</small></h1>
          </div>
          <div className='quant-box'>
            <div  className='quant-flex'>
              <div>
                <button
                  className='quant-button'
                  onClick={() => this.toggleQuantity(false)}>
                  -
                </button>
              </div>
              <h1 className='quantity'>{this.state.quantity}</h1>
              <div>
                <button
                  className='quant-button'
                  onClick={() => this.toggleQuantity(true)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <button className='add-to-cart'>Add to cart</button>
        </div>
        <div className='desc-section'>
          <h2>Description</h2>
          <p>Available in 7 watts, 9 watts, 11 watts Spiral Lightbulb in B22, bulb switches on instantly, no wiaint around warm start and flicker free features...</p>
          <button>Show more</button>
        </div>
        <div className='spec-section'>
          <h2>Specifications</h2>
          <table>
            <tbody>
              <tr>
                <td>Brand</td>
                <td>Philips</td>
              </tr>
              <tr>
                <td>Item weight</td>
                <td>77g</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>12.6x6.2x6.2cm</td>
              </tr>
              <tr>
                <td>Item model number</td>
                <td>E27 ES</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Cool daylight</td>
              </tr>
            </tbody>
          </table>
          <button>Show less</button>
        </div>
        <div className='performance-section'>
          <h2>Performance</h2>
          <img src={Graph} />
        </div>
      </div>
    )
  }
}

export default ProductListing;