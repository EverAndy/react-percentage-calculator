import React from 'react';

class CalculatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      type: "a"
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let result;
    if(this.state.type === "a") {
      result = (this.state.a / this.state.b) * 100;
    } else {
      result = (this.state.a * this.state.b) / 100;
    }
    this.props.setResult(result);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" name="a" onChange={this.handleInputChange}/>
        <select name="type" onChange={this.handleInputChange}>
          <option value="a">is what percent of</option>
          <option value="b">is what value when % of</option>
        </select>
        <input type="number" name="b" onChange={this.handleInputChange}/>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default CalculatorForm;
