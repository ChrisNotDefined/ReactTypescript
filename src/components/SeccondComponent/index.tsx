import React, { Component } from "react";

export default class SeccondComponent extends Component {
  render() {
    throw new Error("Planned Exception")
    return (
      <>
        <h1>Seccond component</h1>
      </>
    );
  }
}
