import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent(event) {
    const buttonName = event.target.id;
    const obj = calculate(this.state, buttonName);
    console.log(obj);
    const { total, next, operation } = obj;
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    return (
            <div className='wrapper'>
                <div className='calculator'>
                    <ul className='row-1'>
                        <li className='result'>{this.state.next || 0}</li>
                    </ul>
                    <ul className='row row-2'>
                        <li className='calc-items' id='AC' onClick={this.handleClickEvent}>AC</li>
                        <li className='calc-items' id='+/-' onClick={this.handleClickEvent}>+/-</li>
                        <li className='calc-items' id='%' onClick={this.handleClickEvent}>%</li>
                        <li className='calc-items calc-operation' id='/' onClick={this.handleClickEvent}>/</li>
                    </ul>
                    <ul className='row row-3'>
                        <li className='calc-items' id='7' onClick={this.handleClickEvent}>7</li>
                        <li className='calc-items' id='8' onClick={this.handleClickEvent}>8</li>
                        <li className='calc-items' id='9' onClick={this.handleClickEvent}>9</li>
                        <li className='calc-items calc-operation' id='x' onClick={this.handleClickEvent}>x</li>
                    </ul>
                    <ul className='row row-4'>
                        <li className='calc-items' id='4' onClick={this.handleClickEvent}>4</li>
                        <li className='calc-items' id='5' onClick={this.handleClickEvent}>5</li>
                        <li className='calc-items' id='6' onClick={this.handleClickEvent}>6</li>
                        <li className='calc-items calc-operation' id='-' onClick={this.handleClickEvent}>-</li>
                    </ul>
                    <ul className='row row-5'>
                        <li className='calc-items' id='1' onClick={this.handleClickEvent}>1</li>
                        <li className='calc-items' id='2' onClick={this.handleClickEvent}>2</li>
                        <li className='calc-items' id='3' onClick={this.handleClickEvent}>3</li>
                        <li className='calc-items calc-operation' id='+' onClick={this.handleClickEvent}>+</li>
                    </ul>
                    <ul className='row row-6'>
                        <li className='calc-items zero' id='0' onClick={this.handleClickEvent}>0</li>
                        <li className='calc-items' id='.' onClick={this.handleClickEvent}>.</li>
                        <li className='calc-items calc-operation' id='=' onClick={this.handleClickEvent}>=</li>
                    </ul>
                </div>
                {this.props.text}
            </div>
    );
  }
}

export default Calculator;