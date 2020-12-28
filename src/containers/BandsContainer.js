import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />

        <Bands bands={this.props.bands} />


      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })
// const mapStateToProps = (state) => ({ bands: state.bands })

const mapDispatchToProps = dispatch => ({
  // addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  addBand: band => dispatch({ type: 'ADD_BAND', payload: band }) // band = { name: value }
})

export default connect(mapStateToProps, mapDispatchToProps) (BandsContainer)
