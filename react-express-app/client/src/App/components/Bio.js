import React, { Component } from 'react';
import './Bio.css';

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
            </div>
        )
        return <Bio/>;
    }
}

export default Bio;