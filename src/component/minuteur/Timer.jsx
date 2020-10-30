/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 5,
      seconds: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
          this.handleChange();
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  handleChange() {
    const { timer } = this.props;
    timer(true);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div className="wrapTimer">
        { minutes === 0 && seconds === 0
          ? <h1>Fin du temps!</h1>
          : (
            <h1>
              Temps Restant :
              {' '}
              {minutes}
              :
              {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
      </div>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.func,
};

Timer.defaultProps = {
  timer: () => {},
};