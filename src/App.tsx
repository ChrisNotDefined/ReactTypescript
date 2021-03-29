import React from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";

class App extends React.Component {

  render() {
    return (
      <>
        <h1>My App</h1>
        <FirstComponent/>
      </>
    );
  }
}

export default App;
