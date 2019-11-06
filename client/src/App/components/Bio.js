import React, { Component } from 'react';
import './CSS/Bio.css';

import Countdown from './Countdown';

class Bio extends Component {

    render() {
        const Photo = () => (
            <img id="me" src={this.props.srcme} alt={this.props.altme}/>
        )
        const About = () => (
            <div className="about">
                <h1>A Little About Amanda </h1>
                <p className="bio">{this.props.text}</p>
                <img id="dana" src={this.props.srcdana} alt={this.props.altdana}/>
            </div>
        )
        const Bio = () => (
            <div className="bio" id="about">
                <div className="floatleft">
                    <Photo/>
                    <Countdown timeTillDate="2020-05-09 06:00" timeFormat="YYYY-MM-DD HH:mm" timeTillDateFormatted="May 9th, 2020"/>
                </div>
                <About/>
                <div className="clear"></div>
            </div>
        )
        return <Bio/>;
    }
}



export default Bio;