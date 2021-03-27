import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interface";
import axios from "axios";

class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {
  constructor(props: CounterManagementProps) {
    super(props);

    this.state = {
      counter: 0,
      users: [],
    };

    console.log("Constructor");
  }

  handleAddClick = () => {
    // Modify based on the state of the last render
    // this.setState({
    //   counter: this.state.counter + 1
    // });

    // Modify based on the last change in the state
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });

    this.setState(
      (prevState) => {
        return {
          counter: prevState.counter + 1,
        };
      },
      () => {
        // Callback when the state is changed
        console.log("Changed state");
      }
    );

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  handleMinusClick = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  // Use for taking in consideration the props that are passed when setting or updating the state
  static getDerivedStateFromProps(
    props: CounterManagementProps,
    state: CounterManagementState
  ) {
    console.log("getDerivedStateFromProps");
    // return props.ownerName === "Chris" ? { counter: 5 } : null;
    return null;
  }

  clickWindow = () => {
    console.log('Click window occured');
    this.setState({counter: this.state.counter + 1})
  }

  componentDidMount() {
    console.log("Component Did Mount");
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      const data = res.data;

      const users = data.data.map((userData: any) => userData.first_name);

      this.setState({ users });
    });
    window.addEventListener('click', this.clickWindow);
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.clickWindow);
  }

  render() {
    console.log("render");
    const { ownerName } = this.props;
    const { counter, users } = this.state;
    return (
      <div>
        <h1>Counter Manager</h1>
        <h2>Owner Name: {ownerName}</h2>
        <h3> Counter: {counter}</h3>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleMinusClick}>Rest</button>
        <ul>
          {users.map((user, index) => <li key={index}>{user}</li>)}
        </ul>
      </div>
    );
  }
}

export default CounterManagement;
