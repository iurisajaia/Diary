import React, { Component } from "react";

export const MyContext = React.createContext();


class MyProvider extends Component {
  state = {
    names: ['user1', 'user2', 'user3']
  };


  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;