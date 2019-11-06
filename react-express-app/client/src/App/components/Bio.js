import React, { Component } from 'react';
import './CSS/Bio.css';

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
            <div className="bio" id="about">
                <Photo/>
                <About/>
                <div class="clear"></div>
                <Countdown timeTillDate="2020-05-09 06:00" timeFormat="YYYY-MM-DD HH:mm" timeTillDateFormatted="May 9th, 2020"/>
            </div>
        )
        return <Bio/>;
    }
}



export default Bio;