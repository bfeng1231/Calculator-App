import React from 'react';

class Buttons extends React.Component {
  state = {
    value: ''
  };

  onClick = (input) => {
    console.log(input);
    this.setState({value: this.state.value + input});
  }
  
  onEnter = () => {
    console.log("enter");
    try {
      this.setState({value: String(eval(this.state.value))});
    } catch (error) {
      console.error(error);
      this.setState({value: "Invalid Entry"});
    }
  }

  onClear = () => {
    console.log("clear");
    this.setState({value: ""});
  }
  
  render () {
    return (
      <div>
        {this.state.value}
        <br/>
        <button onClick={this.onClear}>Clear</button>
        <br/>
        <button onClick={this.onClick.bind(this, 7)}>7</button>
        <button onClick={this.onClick.bind(this, 8)}>8</button>
        <button onClick={this.onClick.bind(this, 9)}>9</button>
        <br/>
        <button onClick={this.onClick.bind(this, 4)}>4</button>
        <button onClick={this.onClick.bind(this, 5)}>5</button>
        <button onClick={this.onClick.bind(this, 6)}>6</button>
        <button onClick={this.onClick.bind(this, "-")}>-</button>
        <br/>
        <button onClick={this.onClick.bind(this, 1)}>1</button>
        <button onClick={this.onClick.bind(this, 2)}>2</button>
        <button onClick={this.onClick.bind(this, 3)}>3</button>
        <button onClick={this.onClick.bind(this, "+")}>+</button>
        <br/>
        <button onClick={this.onClick.bind(this, 0)}>0</button>
        <button onClick={this.onEnter}>=</button>
      </div>
    );
  }
}

export default Buttons;