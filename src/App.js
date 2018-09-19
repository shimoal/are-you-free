import React, { Component } from 'react';
import './styles/App.css';

import DayView from './components/DayView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DayView />
      </div>
    );
  }
}

export default App;
