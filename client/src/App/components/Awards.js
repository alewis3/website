import React, { Component } from 'react';
import './CSS/Awards.css';

class Award extends Component {
    render() {
        return <div className="award">
            <img className="award-img" src={this.props.src} alt={this.props.alt}/>
            <p>{this.props.text}</p>
        </div>
    }
}

class Awards extends Component {
    render() {
        const ProjectSection = () => (
            <div className="awards" id="awards">
                <h1>Awards</h1>
                <div className="awards-wrapper">
                    <Award src='/CSAward.png' alt="Computer Science Award Amanda Lewis" text="Outstanding Student in First Year Computer Science Courses, awarded April 2018"/>
                    <Award src='/SpanishAward.png' alt="Spanish Award Amanda Lewis" text="Outstanding Student in Spanish, awarded April 2017"/>
                    <Award src={'/steds_icon.png'} alt={"Dean's List Amanda Lewis"} text={"Dean's List from August 2016 to Fall 2019 (Excluding Summer 2017)"}/>
                </div>
            </div>
        )
        return <ProjectSection/>;
    }
}

export default Awards;