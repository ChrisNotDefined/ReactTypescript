import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { MyContextProvider } from "./context/MyContext";

class App extends React.Component {

  render() {
    return (
      <MyContextProvider>
        <h1>My App</h1>
        <HomePage/>
      </MyContextProvider>
    );
  }
}

export default App;
