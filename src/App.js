import React from "react";
import Button from "./Components/Button";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  color = () => {
    return this.state.count > 0
      ? "green"
      : this.state.count < 0
      ? "red"
      : "black";
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Counter</h1>
        <h1 className={this.color()}>{this.state.count}</h1>
        <Button btnName="Increase" onClick={this.increment} />
        <Button btnName="Reset" onClick={this.reset} />
        <Button btnName="Decrease" onClick={this.decrement} />
      </div>
    );
  }
}

export default App;
