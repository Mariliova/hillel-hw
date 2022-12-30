import React from "react";
import "./Item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>{this.props.reaction}</button>
        <p className="counter">{this.state.counter}</p>
      </div>
    );
  }
}

export default Item;
