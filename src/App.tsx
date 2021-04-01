import React from "react";
import "./App.css";
import Fruits from "./components/fruits";

class App extends React.Component {

  render() {
    return (
      <>
        <h1>My App</h1>
        <Fruits />
      </>
    );
  }
}

export default App;
