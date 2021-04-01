import React, { Component } from "react";
import { IFruitsProps, IFruitsState } from "./interfaces";

class Fruits extends Component<IFruitsProps, IFruitsState> {
  constructor(props: IFruitsProps) {
    super(props);

    this.state = {
      fruits: ["apple", "bananas"],
      newFruit: ''
    };
  }

  handleInputChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newFruit: event.currentTarget.value
    })
  }

  handleAddButtonClick = () => {
    this.setState({
      fruits: [this.state.newFruit, ...this.state.fruits]
    })
  }

  render() {
    const { fruits, newFruit } = this.state;
    const fruitsUI = fruits.map((fruit) => {
      return <li key={fruit}><span>{fruit}</span><input/></li>;
    });

    return (
      <div>
        <h1> Fruits</h1>
        <ul>{fruitsUI}</ul>
        <input value={newFruit} onChange={this.handleInputChage}/>
        <button onClick={this.handleAddButtonClick}>Add Fruit</button>
      </div>
    );
  }
}

export default Fruits;
