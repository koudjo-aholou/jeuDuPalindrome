import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        minutes: 0,
        seconds: 10,
    };
  }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                    this.handleChange();
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    handleChange = () => {
      this.props.timer(true);
    }

    render() {
        const { minutes, seconds } = this.state;
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <h1>Fin du temps!</h1>
                    : <h1>Temps Restant : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}