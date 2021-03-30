import React from "react";
import "./App.css";
import NewsFeed from "./components/NewsFeed";
import Profile from "./components/Profile";
import TrackClick from "./components/TrackClick";

class App extends React.Component {

  render() {
    return (
      <>
        <h1>My App</h1>
        {/* Using render props */}
        {/* <TrackClick renderProps={(click) => <Profile click={click}/>}/>
        <TrackClick renderProps={(click) => <NewsFeed click={click}/>}/> */}
        {/* Using High Order Component */}
        <Profile ownerName="Help me"/>
        <NewsFeed />
      </>
    );
  }
}

export default App;
