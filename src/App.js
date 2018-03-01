import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gemmatch from './Game/Gemmatch';

class App extends Component {
  render() {
    Gemmatch();
    return (
      <div id="myCanvas">

      </div>   
    );
  }
}

export default App;
