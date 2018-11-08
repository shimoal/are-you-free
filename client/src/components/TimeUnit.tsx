import * as React from "react";
import "../styles/TimeUnit.css";

const BUSY_STATUS = "busy";
const FREE_STATUS = "free";

export default class TimeBlock extends React.Component<
  {
    label: string;
    height: number;
    width: number;
  },
  { isFree: boolean }
> {
  state = {
    isFree: false
  };

  render() {
    const { label, height, width } = this.props;
    const { isFree } = this.state;
    const status = isFree ? FREE_STATUS : BUSY_STATUS;
    const click: () => void = () => {
      this.setState(prevState => ({
        isFree: !prevState.isFree
      }));
    };

    return (
      <div
        className={"timeblock " + status}
        onClick={click}
        style={{ height, width }}
      >
        <p>{label}</p>
        <p>{status}</p>
      </div>
    );
  }
}
