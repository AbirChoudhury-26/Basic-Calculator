import './App.css';

import { useState } from 'react';

function App() {
  // const[count,setCount]=useState(0);  // UseState is already created by react for creating states.Usesate will return 2 things,first is the state variable and other is the modification we want to see in it
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  let docalculation = (type) => {
    switch (type) {
      case 'ADD':
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case 'SUBTRACT':
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case 'MULTIPLY':
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case 'DIVIDE':
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
    }
  };

  return (
    <div>
      {/* <h1>Hi!! My name is Abir Choudhury:{count}</h1>
     <button onClick={
      (_e)=>{         // _e is event handling,we can name it any we want
        console.log("Button Clicked");
        setCount(count+1);
      }}
      >Click me
      </button> */}
      <h1 className="heading"> CALCULATOR</h1>
      
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type={'number'}
            placeholder={'Enter the first number'}
            onChange={(e) => {
              setFirstNumber(e.target.value);
            }} className='field'
          />{' '}
          <input
            type={'number'}
            placeholder={'Enter the Second number'}
            onChange={(e) => {
              setSecondNumber(e.target.value);
            }} className='field'
          />
          <br />
          <br />
          <button onClick={() => docalculation('ADD')} className="calc">
            Add
          </button>{' '}
          <button onClick={() => docalculation('SUBTRACT')} className="calc">
            Subtract
          </button>{' '}
          <button onClick={() => docalculation('MULTIPLY')} className="calc">
            Multiply
          </button>{' '}
          <button onClick={() => docalculation('DIVIDE')} className="calc">
            Divide
          </button>{' '}
          <h3>Result is: {result}</h3>
        </form>
      </div>
    </div>
  );
}

export default App;
