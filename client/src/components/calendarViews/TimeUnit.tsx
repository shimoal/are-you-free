import * as React from "react";
import "../../styles/TimeUnit.css";

import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

interface IProps {
  displayLabel: string;
  removeOption: (optionIndex: number, event: any) => void;
  selectOption: (event: any, value: string) => void;
  label: string;
  height: number;
  options: Array<string>;
  width: number;
}

const TimeBlock = (props: IProps) => {
  const {
    displayLabel,
    removeOption,
    selectOption,
    label,
    height,
    width,
    options
  } = props;
  const selectedIndex = options.indexOf(label);
  const selected = selectedIndex > -1;
  const checkMark = selected ? (
    <Icon style={{ fontSize: 14 }}>check_circle_outline</Icon>
  ) : null;

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
      <Grid container justify="center">
        <Grid item>{checkMark}</Grid>
        <Grid item>
          <Typography variant="subtitle1">{displayLabel}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TimeBlock;
