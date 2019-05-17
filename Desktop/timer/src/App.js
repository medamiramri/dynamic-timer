import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './timer'
import './App.css'

var seconds=4560;

function App() {
  return (
    <div className="App">
     <Timer time={seconds}/>
    </div>
  );
}

export default App;
