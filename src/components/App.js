import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  render() {
    return (
      <div id="calculator-container">
        <h1>hello</h1>
        <Display/>
        <ButtonPanel/>
      </div>
    )
  }
}

export default App;
