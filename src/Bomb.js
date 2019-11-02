// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    return secondsLeft == 0 ? <div>Boom</div> : <div>{secondsLeft} seconds left before I go boom!</div>
  }
}
