import React, { Component } from 'react'


class SuperComponent extends Component {
  printSuperComponent = () => {
    alert('Super component')
  }

  render() {
    return (
      <div>
        <h2>Super Component</h2>
      </div>
    )
  }
}

export default SuperComponent
