import React, { Component } from 'react';
import './styles/App.css';

import CalendarMenu from './components/CalendarMenu';
import DayView from './components/DayView';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<CalendarMenu />
        <DayView />
      </div>
    );
  }
}

export default App;
