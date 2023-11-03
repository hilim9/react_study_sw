import { useState } from 'react';

const Counter2 = () => {
  //const state = useState();
  // const number = state[0];
  //const setNumber = state[1];

  const [number, setNumber] = useState(0); // useState의 초기값을 number에 넣어줌

  return (
    <div>
      <h1>{number}</h1>
      <button type="button" onClick={() => setNumber(number + 1)}>
        +1
      </button>
    </div>
  );
};

export default Counter2;
