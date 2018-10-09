import React from 'react';
import '../styles/TimeBlock.css';

import TimeUnit from './TimeUnit';

export default class TimeBlock extends React.Component {
  render() {
    const {abbreviation, number} = this.props;
    const label = number + ':00' + abbreviation;

    return (
      <TimeUnit label={label} height={100} width={180} />
    );
  }
};