import * as React from "react";

import Paper from '@material-ui/core/Paper'

interface IOption {
  id: number;
  label: string;
  choice: string;
}

interface IProps {
  handleOptionsChange: (optionId: number, choice: string) => void;
  option: IOption;
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
    const { handleOptionsChange, option: {label, id} } = this.props;
    const { selected } = this.state;

    return (
      <Paper 
        onClick={(event) => {
          this.setState(prevState => {
            const choiceIndex = prevState.selected === 2 ? 0 : prevState.selected + 1;
            handleOptionsChange(id, OPTION_CHOICES[choiceIndex]);
            return {selected: choiceIndex};
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