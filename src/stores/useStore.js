import React from 'react';
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;
