import * as React from "react";
import "../../styles/TimeUnit.css";

const BUSY_STATUS = "busy";
const FREE_STATUS = "free";

import Paper from '@material-ui/core/Paper'

interface IProps {
  label: string;
  height: number;
  width: number;
}

export default class TimeBlock extends React.Component<
  IProps,
  { isFree: boolean }
> {
  state = {
    isFree: false
  };

  render() {
    const { label, height, width } = this.props;
    const { isFree } = this.state;
    const status = isFree ? FREE_STATUS : BUSY_STATUS;

    return (
      <Paper 
        className={"timeblock " + status}
        onClick={() => {
          this.setState(prevState => ({
            isFree: !prevState.isFree
          }));
        }}
        style={{ 
          height, 
          width,
          backgroundColor: this.state.isFree ? 'lightgreen' : ''
        }}
      >
        <p>{label}</p>
        <p>{status}</p>
      </Paper>
    );
  }
}
