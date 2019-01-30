import * as React from "react";

import Paper from '@material-ui/core/Paper'

interface IProps {
  label: string;
}

interface IState {
  selected: number;
}

const OPTION_CHOICES = ['Yes', 'No', 'Maybe']

class ResponseOptionChoice extends React.Component<IProps, IState> {
  state = {
    selected: 0
  };

  render() {
    const { label } = this.props;
    const { selected } = this.state;

    return (
      <Paper 
        onClick={(event) => {
          this.setState(prevState => {
            if (prevState.selected === 2) {
              return {selected: 0};
            }
            return {selected: prevState.selected + 1};
          });
        }}
        style={{ 
          height: 60, 
          width: 60,
          backgroundColor: selected === 0 ? 'lightgreen' : 
                           selected === 1 ? 'lightpink' :
                           'yellow'
        }}
      >
        <p>{label}</p>
        <p>{OPTION_CHOICES[selected]}</p>
      </Paper>
    );
  }
}

export default ResponseOptionChoice;