import React from 'react';
import style from '../styles/TimeBlock.css';

export default class TimeBlock extends React.Component {
  state = {
    isFree: undefined,
  };

  render() {
    const {abbreviation, number, allFree, allBusy} = this.props;
    const {isFree} = this.state;
    console.log(isFree);
    let status;
    if (isFree === undefined) {
      if (allFree) {
        status = 'free';
      } else {
        status = 'busy';
      }
    }else {
      status = isFree ? 'free' : 'busy';
    }

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