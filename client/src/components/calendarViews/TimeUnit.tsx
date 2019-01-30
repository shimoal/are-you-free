import * as React from "react";
import "../../styles/TimeUnit.css";

import Paper from '@material-ui/core/Paper'

interface IProps {
  selectOption: (event: any, value: string) => void;
  label: string;
  height: number;
  width: number;

}

interface IState {
  selected: boolean;
}

class TimeBlock extends React.Component<IProps, IState> {
  state = {
    selected: false
  };

  render() {
    const { selectOption, label, height, width } = this.props;
    const { selected } = this.state;

    return (
      <Paper 
        className={"timeblock"}
        onClick={(event) => {
          selectOption(event, label);
          this.setState(prevState => ({
            selected: !prevState.selected
          }));
        }}
        style={{ 
          height, 
          width,
          backgroundColor: selected ? 'lightgreen' : ''
        }}
      >
        <p>{label}</p>
        <p>{selected && 'selected'}</p>
      </Paper>
    );
  }
}

export default TimeBlock;
