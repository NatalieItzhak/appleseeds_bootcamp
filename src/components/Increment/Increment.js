import React, { useState } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }


  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (

      <div className="cont">
        <button onClick={(e) => this.increment(e)}>+</button>
        <button onClick={(e) => this.decrement(e)}>-</button>

        <h3> Counter:{this.state.count}</h3>
      </div>
    );
  }
};

export default Counter;