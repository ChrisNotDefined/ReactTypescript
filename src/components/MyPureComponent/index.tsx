import React, { PureComponent } from "react";
import MyReactMemo from "../MyReactMemo";
import { PureComponentProps, PureComponentState } from "./interfaces";

class MyPureComponent extends PureComponent<
  PureComponentProps,
  PureComponentState
> {
  constructor(props: PureComponentProps) {
    super(props);

    this.state = {
      name: "Chris",
      address: {
        city: "Masertar",
        state: "Miresva",
      },
    };
  }

  handleSetState = () => {
    this.setState({
      name: 'New Man',
    });
  };

  render() {
    const {name, address} = this.state;
    return (
      <>
        <h1>Pure Component</h1>
        <MyReactMemo name={name} address={address}/>
        <button onClick={this.handleSetState}>Set State</button>
      </>
    );
  }
}

export default MyPureComponent;
