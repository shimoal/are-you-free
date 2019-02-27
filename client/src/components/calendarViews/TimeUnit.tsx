import * as React from "react";
import Icon from "@material-ui/core/Icon";
import "../../styles/TimeUnit.css";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

interface IProps {
  removeOption: (optionIndex: number, event: any) => void;
  selectOption: (event: any, value: string) => void;
  label: string;
  height: number;
  options: Array<string>;
  width: number;
}

const TimeBlock = (props: IProps) => {
  const { removeOption, selectOption, label, height, width, options } = props;
  const selectedIndex = options.indexOf(label);
  const selected = selectedIndex > -1;
  const checkMark = selected ? <Icon>check_circle_outline</Icon> : null;

  return (
    <Paper
      className={"timeblock"}
      onClick={event => {
        if (selected) {
          removeOption(selectedIndex, event);
        } else {
          selectOption(event, label);
        }
      }}
      style={{
        height,
        width,
        backgroundColor: selected ? "lightgreen" : ""
      }}
    >
      {checkMark}
      <Typography variant="subtitle1">{label}</Typography>
    </Paper>
  );
};

export default TimeBlock;
