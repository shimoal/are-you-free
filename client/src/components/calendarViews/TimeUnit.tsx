import * as React from "react";
import Icon from "@material-ui/core/Icon";
import "../../styles/TimeUnit.css";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

interface IProps {
  selectOption: (event: any, value: string) => void;
  label: string;
  height: number;
  options: Array<string>;
  width: number;
}

const TimeBlock = (props: IProps) => {
  const { selectOption, label, height, width, options } = props;
  const selected = options.indexOf(label) > -1;
  const checkMark = selected ? <Icon>check_circle_outline</Icon> : null;

  return (
    <Paper
      className={"timeblock"}
      onClick={event => {
        selectOption(event, label);
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
