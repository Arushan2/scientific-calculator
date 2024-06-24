// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(String(eval(input)));
    } catch (error) {
      setInput('Error');
    }
  };

  const handleSqrt = () => {
    try {
      setInput(String(Math.sqrt(eval(input))));
    } catch (error) {
      setInput('Error');
    }
  };

  const handlePower = () => {
    setInput(input + '**');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={handleSqrt}>√</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleBackspace}>⌫</button>
        <button onClick={handlePower}>^</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
