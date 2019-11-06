import React, { Component } from 'react';

import './CSS/Project.css';

class Project extends Component {
    render() {
        const LogoImg = () => {
            return <img className="logo" alt={this.props.alt} src={this.props.src}/>;
        };
        const TitleAndDescription = () => {
            return (
                <div className="project-bio">
                    <h2 className="title">{this.props.title}</h2>
                    <p className="desc" dangerouslySetInnerHTML={this.props.description}></p>
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