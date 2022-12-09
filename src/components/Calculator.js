import './Calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate.js';

function Calculator() {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//     this.handleClickEvent = this.handleClickEvent.bind(this);
//   }
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClickEvent = (event) => {
    const buttonName = event.target.id;
    const obj = calculate(calcObj, buttonName);
    // const { total, next, operation } = obj;
    setCalcObj({
      ...obj,
    });
  };

  return (
            <div className='wrapper'>
                <div className='calculator'>
                    <ul className='row-1'>
                        <li className='result'>{calcObj.operation !== null ? calcObj.next : calcObj.total || 0}</li>
                    </ul>
                    <ul className='row row-2'>
                        <li className='calc-items' id='AC' onClick={handleClickEvent}>AC</li>
                        <li className='calc-items' id='+/-' onClick={handleClickEvent}>+/-</li>
                        <li className='calc-items' id='%' onClick={handleClickEvent}>%</li>
                        <li className='calc-items calc-operation' id='÷' onClick={handleClickEvent}>÷</li>
                    </ul>
                    <ul className='row row-3'>
                        <li className='calc-items' id='7' onClick={handleClickEvent}>7</li>
                        <li className='calc-items' id='8' onClick={handleClickEvent}>8</li>
                        <li className='calc-items' id='9' onClick={handleClickEvent}>9</li>
                        <li className='calc-items calc-operation' id='x' onClick={handleClickEvent}>x</li>
                    </ul>
                    <ul className='row row-4'>
                        <li className='calc-items' id='4' onClick={handleClickEvent}>4</li>
                        <li className='calc-items' id='5' onClick={handleClickEvent}>5</li>
                        <li className='calc-items' id='6' onClick={handleClickEvent}>6</li>
                        <li className='calc-items calc-operation' id='-' onClick={handleClickEvent}>-</li>
                    </ul>
                    <ul className='row row-5'>
                        <li className='calc-items' id='1' onClick={handleClickEvent}>1</li>
                        <li className='calc-items' id='2' onClick={handleClickEvent}>2</li>
                        <li className='calc-items' id='3' onClick={handleClickEvent}>3</li>
                        <li className='calc-items calc-operation' id='+' onClick={handleClickEvent}>+</li>
                    </ul>
                    <ul className='row row-6'>
                        <li className='calc-items zero' id='0' onClick={handleClickEvent}>0</li>
                        <li className='calc-items' id='.' onClick={handleClickEvent}>.</li>
                        <li className='calc-items calc-operation' id='=' onClick={handleClickEvent}>=</li>
                    </ul>
                </div>
            </div>
  );
}

export default Calculator;