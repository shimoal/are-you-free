import React, { Component } from 'react';

import TimeBlocks from './TimeBlocks';

export default class DayView extends Component {
  render() {
    return <div>
      <h2>Here is DayView</h2>
      <TimeBlocks />
      <TimeBlocks />
    </div>
  }
}