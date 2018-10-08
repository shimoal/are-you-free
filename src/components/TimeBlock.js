import React from 'react';
import style from '../styles/TimeBlock.css';

export default class TimeBlock extends React.Component {
  state = {
    isFree: false,
  };

  render() {
    const {abbreviation, number, allFree, allBusy} = this.props;
    const {isFree} = this.state;
    const status = isFree ? 'free' : 'busy';

    return (
      <div className={"timeblock " + status} onClick={() => {
        this.setState((prevState) => ({
          isFree: !prevState.isFree
        }));
      }}>
        <p>{number}:00 {abbreviation}</p>
        <p>{status}</p>
      </div>
    );
  }
};