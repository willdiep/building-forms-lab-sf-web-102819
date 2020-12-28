// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }
  
  handleOnChange = event => {
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
    this.setState({
      name: event.target.value,
    });
  }
  
  handleOnSubmit = event => {
    event.preventDefault()

    console.log(event)

    this.props.addBand(this.state)

    this.setState({
      name: ''
    })
  }

  
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>

        <label>Add Band:</label>

        <input 
          type="text"
          value={this.state.name}
          name='name'
          onChange={this.handleOnChange}
        />

        <input type='submit' />


        </form>
      </div>
    )
  }
}

export default BandInput
