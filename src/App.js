import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import React from 'react';
import {Button} from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Button>hi</Button>
      </header>
    </div>
  );
}

export default App;
