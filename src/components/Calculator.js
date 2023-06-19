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
    this.setState({result});
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <CalculatorForm setResult={this.setResult}/>
          <p className="text-gray-700 text-lg">Result: {this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
