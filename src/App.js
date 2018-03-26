import React, { Component } from 'react';
import Button from './components/button';
import ShowJson from './components/show_json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Button />
        </header>
        <ShowJson />
      </div>
    );
  }
}

export default App;
