// your ImageSlider code here!

import React, { Component } from 'react'

class ImageSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div>I am on slide {currentSlideIndex}</div>
    )
  }
}
