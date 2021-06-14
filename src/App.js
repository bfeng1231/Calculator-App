import React from 'react';
import './App.css';
import Buttons from './components/buttons';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        Calculator App
        <Buttons />
      </div>
    );
  }
}

export default App;
