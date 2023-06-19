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
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let result;
    if (this.state.type === "a") {
      result = (this.state.a / this.state.b) * 100;
    } else {
      result = (this.state.a * this.state.b) / 100;
    }
    this.props.setResult(result);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mb-4">
        <input
          type="number"
          name="a"
          onChange={this.handleInputChange}
          className="bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded w-full py-2 px-3 text-lg leading-tight focus:outline-none focus:border-gray-500"
          placeholder="Value"
        />
        <div className="relative mt-4">
          <select
            name="type"
            onChange={this.handleInputChange}
            className="bg-gray-900 text-white border border-gray-700 rounded w-full py-2 px-3 text-lg leading-tight focus:outline-none focus:border-gray-500"
          >
            <option value="a">is what percent of</option>
            <option value="b">is what value when % of</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <input
          type="number"
          name="b"
          onChange={this.handleInputChange}
          className="bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded w-full py-2 px-3 text-lg mt-4 leading-tight focus:outline-none focus:border-gray-500"
          placeholder="Percentage"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Calculate
        </button>
      </form>
    );
  }
}

export default CalculatorForm;
