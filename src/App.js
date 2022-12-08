import React from 'react';
import './App.css';
import Calculator from './components/Calculator.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <Calculator text={this.props.text}/>
    );
  }
}

export default App;
