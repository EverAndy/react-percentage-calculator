// Calculator.js
import React from 'react';
import CalculatorForm from './CalculatorForm';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  setResult = (result) => {
    this.setState({ result });
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 shadow-md rounded p-6 max-w-sm w-full">
          <h1 className="text-white text-2xl mb-4">Percentage Calculator</h1>
          <CalculatorForm setResult={this.setResult} />
          <p className="text-white text-lg mt-4">
            Result: {this.state.result}
          </p>
        </div>
      </div>
    );
  }
}
//
export default Calculator;