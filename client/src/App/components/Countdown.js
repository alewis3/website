import React, { Component } from 'react';
import moment from 'moment';
import './CSS/Countdown.css';

class Countdown extends Component {

    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
        clicked: false
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('DDD');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    gradClicked = () => {
        if (this.state.clicked) {
            console.log("hiding");
            this.setState({clicked: false});
        } else if (!this.state.clicked) {
            console.log("showing");
            this.setState({clicked: true});
        }
    }

    render() {
        var {days, hours, minutes, seconds} = this.state;
        const daysRadius = mapNumber(days, 200, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        const Countdown = () => (
            <div className="countdown">
                <b>Countdown to my Birthday!</b>
                <div className="countdown-wrapper" onClick={this.gradClicked}>
                    {days && (<CountdownItem count={days} name="Days" radius={daysRadius}/>)}
                    {hours && (<CountdownItem count={hours} name="Hours" radius={hoursRadius}/>)}
                    {minutes && (<CountdownItem count={minutes} name="Minutes" radius={minutesRadius}/>)}
                    {seconds && (<CountdownItem count={seconds} name="Seconds" radius={secondsRadius}/>)}
                </div>
                <p className={!this.state.clicked ? "grad-date-hidden": "grad-date"}>Graduation is on {this.props.timeTillDateFormatted}!</p>
            </div>
        )
        return <Countdown/>;
    }

}

class CountdownItem extends Component {
    render() {
        const SVGCircle = ({ radius }) => (
            <svg className="countdown-svg">
                <path
                    fill="none"
                    stroke="#6F3524"
                    strokeWidth="4"
                    d={describeArc(50, 50, 48, 0, radius)}
                />
            </svg>
        );
        const CountdownItem = () => (
            <div className="countdown-item">
                <SVGCircle radius={this.props.radius} />
                {this.props.count}
                <span>{this.props.name}</span>
            </div>

        )
        return <CountdownItem/>
    }
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

export default Countdown;