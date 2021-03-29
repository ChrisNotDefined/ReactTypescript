import axios from "axios";
import React from "react";
import {
  CounterManagementProps,
  CounterManagementState,
  UserDataAPI,
} from "./interface";
class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {
  constructor(props: CounterManagementProps) {
    super(props);

    this.state = {
      counter: 0,
      user: 1,
      userData: {
        id: 0,
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
    };
  }

  handleAddClick = () => {
    // Modify based on the state of the last render
    this.setState({
      counter: this.state.counter + 1,
      user: this.state.user + 1,
    });
  };

  handleMinusClick = () => {
    this.setState({
      counter: this.state.counter - 1,
      user: this.state.user - 1,
    });
  };

  fetchUserData = () => {
    axios.get(`https://reqres.in/api/users/${this.state.user}`).then((res) => {
      const userDataAPI = res.data as UserDataAPI;
      this.setState({ userData: userDataAPI.data });
    });
  };

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(prevProps: CounterManagementProps, prevState: CounterManagementState) {
    if(prevState.user !== this.state.user){
      this.fetchUserData();
    }
  }

  render() {
    console.log("render");
    const { ownerName } = this.props;
    const { counter, user, userData } = this.state;
    const { first_name } = userData;
    return (
      <div>
        <h1>Counter Manager</h1>
        <h2>Owner Name: {ownerName}</h2>
        <h3> Counter: {counter}</h3>
        <h3> UserID: {user}</h3>
        <h3> First Name: {first_name}</h3>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleMinusClick}>Rest</button>
      </div>
    );
  }
}

export default CounterManagement;
