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
      <div>
        <CalculatorForm setResult={this.setResult}/>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;