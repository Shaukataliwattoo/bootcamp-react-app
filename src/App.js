import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello World from Shaukat Ali
        </h1>
        <p>
          Auto Deployment on Surge through Github actions with custom YML config.
        </p>
      </header>
    </div>
  );
}

export default App;
