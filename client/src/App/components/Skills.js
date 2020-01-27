import React, { Component } from 'react';
import './CSS/Skills.css';

class Skills extends Component {
    render() {
        return (
            <div className={"Skills"}>
                <h2>Skills</h2>
                <ul className={"SkillList"}>{this.props.skills}</ul>
            </div>
        )
    }
}

export default Skills;