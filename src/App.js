import React, { useState } from 'react';
import './App.css';
import { greetReact, greetRedux, greetBoth } from './actions';

function App(props) {
  let store = props.store;

  const [heading, setHeading] = useState(store.getState().receiver);
  function handleReact() {
    store.dispatch(greetReact());
    setHeading(store.getState().receiver);
  }

  function handleRedux() {
    store.dispatch(greetRedux());
    setHeading(store.getState().receiver);
  }

  function handleBoth() {
    store.dispatch(greetBoth());
    setHeading(store.getState().receiver);
  }
  return (
    <div className='App'>
      <h1>Hello {heading}</h1>
      <button
        type='button'
        class='btn btn-outline-warning'
        onClick={handleReact}
      >
        React JS
      </button>
      <button
        type='button'
        class='btn btn-outline-warning'
        onClick={handleRedux}
      >
        Redux
      </button>
      <button
        type='button'
        class='btn btn-outline-warning'
        onClick={handleBoth}
      >
        BOTH
      </button>
    </div>
  );
}

export default App;
