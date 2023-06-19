// CalculatorForm.js
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
      <form onSubmit={this.handleSubmit} className="mb-4">
        <input type="number" name="a" onChange={this.handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <div className="inline-block relative w-full mt-4">
          <select name="type" onChange={this.handleInputChange} className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option value="a">is what percent of</option>
            <option value="b">is what value when % of</option>
          </select>
        </div>
        <input type="number" name="b" onChange={this.handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-4 leading-tight focus:outline-none focus:shadow-outline"/>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Calculate</button>
      </form>
    );
  }
}

export default CalculatorForm;
