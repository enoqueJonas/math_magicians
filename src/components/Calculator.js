import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
            <div className='wrapper'>
                <div className='calculator'>
                    <ul className='row-1'>
                        <li className='result'>0</li>
                    </ul>
                    <ul className='row row-2'>
                        <li className='calc-items'>AC</li>
                        <li className='calc-items'>+/-</li>
                        <li className='calc-items'>%</li>
                        <li className='calc-items calc-operation'>/</li>
                    </ul>
                    <ul className='row row-3'>
                        <li className='calc-items'>7</li>
                        <li className='calc-items'>8</li>
                        <li className='calc-items'>9</li>
                        <li className='calc-items calc-operation'>x</li>
                    </ul>
                    <ul className='row row-4'>
                        <li className='calc-items'>4</li>
                        <li className='calc-items'>5</li>
                        <li className='calc-items'>6</li>
                        <li className='calc-items calc-operation'>-</li>
                    </ul>
                    <ul className='row row-5'>
                        <li className='calc-items'>1</li>
                        <li className='calc-items'>2</li>
                        <li className='calc-items'>3</li>
                        <li className='calc-items calc-operation'>+</li>
                    </ul>
                    <ul className='row row-6'>
                        <li className='calc-items zero'>0</li>
                        <li className='calc-items'>.</li>
                        <li className='calc-items calc-operation'>=</li>
                    </ul>
                </div>
                {this.props.text}
            </div>
    );
  }
}

export default Calculator;