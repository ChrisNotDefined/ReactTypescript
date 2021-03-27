import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interface";

class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {

  constructor(props: CounterManagementProps) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  handleAddClick = () => {
    // Modify based on the state of the last render
    // this.setState({
    //   counter: this.state.counter + 1
    // });

    // Modify based on the last change in the state
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    }, () => { // Callback when the state is changed
      console.log('Changed state');
    });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    });
    
  }

  handleMinusClick= () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    console.log('render');
    const { ownerName } = this.props;
    const {counter} = this.state
    return (
      <div>
        <h1>Counter Manager</h1>
        <h2>Owner Name: {ownerName}</h2>
        <h3> Counter: {counter}</h3>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleMinusClick}>Rest</button>
      </div>
    );
  }
}

export default CounterManagement;
