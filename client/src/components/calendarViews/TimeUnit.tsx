import * as React from "react";
import "../../styles/TimeUnit.css";

import Paper from "@material-ui/core/Paper";

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
      <p>{label}</p>
      <p>{selected && "selected"}</p>
    </Paper>
  );
};

export default TimeBlock;
