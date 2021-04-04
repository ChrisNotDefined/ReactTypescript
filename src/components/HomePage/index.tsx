import React, { Component } from 'react'
import { MyContext } from '../../context/MyContext'
import UserInput from '../UserInput';

class HomePage extends Component {

  static contextType = MyContext;
  context!: React.ContextType<typeof MyContext>

  // property!; means that it will never be null or undefined

  render() {
    return (
      <div>
        <ul>
          {this.context.users.map(user => <li key={user}>{user}</li>)}
        </ul>
        <button onClick={() => this.context.updateUser("bella")}> Add User </button>
        <UserInput/>
      </div>
    )
  }
}

export default HomePage