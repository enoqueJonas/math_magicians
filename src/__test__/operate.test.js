import operate from '../logic/operate.js';

describe('Operation tests:', () => {
  it('Sum operation +', () => {
    const numberOne = 2;
    const numberTwo = 3;
    const operation = '+';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('5');
  });
  it('Subtract operation: -', () => {
    const numberOne = 2;
    const numberTwo = 3;
    const operation = '-';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('-1');
  });
  it('Divide operation: ÷', () => {
    const numberOne = 2;
    const numberTwo = 1;
    const operation = '÷';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('2');
  });
  it('Multiply operation: x', () => {
    const numberOne = 3;
    const numberTwo = 5;
    const operation = 'x';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('15');
  });
});