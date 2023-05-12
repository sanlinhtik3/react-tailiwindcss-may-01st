import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset } from './features/authSlice';

const App = () => {
  const number = useSelector((state) => state.auth.number);
  const dispatch = useDispatch()
  return (
    <>
      <h1>Hello {number} </h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(reset("errorffff"))}>reset</button>
    </>
  );
}

export default App