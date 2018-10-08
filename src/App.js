import React, { Component } from 'react';
import './styles/App.css';

import CalendarMenu from './components/CalendarMenu';
import DayView from './components/DayView';
import MonthView from './components/MonthView';
import WeekView from './components/WeekView';
import YearView from './components/YearView';

class App extends Component {
	state = {
		selectedView: 'day'
	}

	getView() {
		switch (this.state.selectedView) {
			case 'day':
				return <DayView />;
			case 'week':
				return <WeekView />;
			case 'month':
				return <MonthView />;
			case 'year':
				return <YearView />;
			default: 
				return <div />
		}
	}

  render() {
    return (
      <div className="App">
      	<CalendarMenu setView={(selectedView) => this.setState({selectedView})}/>
        {this.getView()}
      </div>
    );
  }
}

export default App;
