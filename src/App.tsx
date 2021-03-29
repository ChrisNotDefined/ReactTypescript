import React from "react";
import "./App.css";
import MyPureComponent from "./components/MyPureComponent";

class App extends React.Component {

  render() {
    return (
      <>
        <h1>My App</h1>
        <MyPureComponent/>
      </>
    );
  }
}

export default App;
