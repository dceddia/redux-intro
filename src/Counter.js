import React from 'react';

class Counter extends React.Component {
  increment = () => {
    // fill in later
  }

  decrement = () => {
    // fill in later
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;
