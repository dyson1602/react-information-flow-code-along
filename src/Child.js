import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      <div onClick={this.props.handleColorChange}
        className="child"
        style={{backgroundColor: this.props.childrenColor}}
      ></div>
    )
  }
}

export default Child
