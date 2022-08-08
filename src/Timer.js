import React from "react";
import ReactDOM from "react-dom/client";
import { TestContext } from "./TestContext";
import TimeList from "./TimeList";

let interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }

  static contextType = TestContext;

  startIntervalFunction = () => {
    this.setState({
      isStart: true,
    });
    if (this.state.isStart === false) {
      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
      }, 1000);
    }
  };
  stopIntervalFunction = () => {
    clearInterval(interval);
    this.setState({
      isStart: false,
    });
  };

  resetIntervalFunction = () => {
    this.stopIntervalFunction();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    });
  };

  componentDidUpdate() {
    if (this.state.second === 60) {
      this.setState({ minute: this.state.minute + 1, second: 0 });
    }
    if (this.state.minute === 60) {
      this.setState({
        minute: 0,
        second: 0,
        hour: this.state.hour + 1,
      });
    }
  }

  handelSaveTime = () => {
    let newTime = document.querySelector(".timer");
    this.context.setTimeArr([...this.context.timeArr, newTime.innerHTML]);
  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <>
        <div className="timerBox">
          <h2 className="timer" onClick={this.handelSaveTime}>{`${
            h > 9 ? h : "0" + h
          } : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</h2>
          <div className="buttonBox">
            <button onClick={this.startIntervalFunction}>start</button>
            <button onClick={this.stopIntervalFunction}>stop</button>
            <button onClick={this.resetIntervalFunction}>reset</button>
            <button onClick={this.props.handelSetIsLight}>
              {this.props.isLight ? "Set Dark" : "Set Light"}
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Timer;
