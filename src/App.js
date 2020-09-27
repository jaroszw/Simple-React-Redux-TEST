import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, logged} from './actions';

function App() {

  const count = useSelector(state => state.counter)
  const log = useSelector(state => state.logged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(logged())}>LOG</button>
      {log?<h3>Jakiś tajny text</h3> : '' }
    </div>
  );
}

export default App;
