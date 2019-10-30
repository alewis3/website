import React, { Component } from 'react';

import './Project.css';

class Project extends Component {
    render() {
        const LogoImg = () => {
            return <img className="logo" alt={this.props.alt} src={this.props.src}/>;
        };
        const TitleAndDescription = () => {
            return (
                <div className="project-bio">
                    <h2>{this.props.title}</h2>
                    <p className="desc">{this.props.description}</p>
                </div>
            );
        };
        return (
            <div className="project">
                <LogoImg/> <br/>
                <TitleAndDescription/>
            </div>
        );
    }
}

export default Project;