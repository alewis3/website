import React, { Component } from 'react';
import './Bio.css';

import Countdown from './Countdown';

class Bio extends Component {

    render() {
        const Photo = () => (
            <img className="image" src={this.props.src} alt={this.props.alt}/>
        )
        const About = () => (
            <div className="about">
                <h1>A Little About Amanda </h1>
                <p className="bio">{this.props.text}</p>
            </div>
        )
        const Bio = () => (
            <div className="bio">
                <Photo/>
                <About/>
                <Countdown timeTillDate="05 08 2020 12:00:00" timeFormat="MM DD YYYY hh:mm:ss"/>
            </div>
        )
        return <Bio/>;
    }
}



export default Bio;