import React, { Component } from 'react';

import './CSS/Nav.css';

class Nav extends Component {

    handleAboutClick = () => {
        var element = document.getElementById("about");
        element.scrollIntoView(true, {behavior: "smooth"});
    }

    handleProjectsClick = () => {
        var element = document.getElementById("projects");
        element.scrollIntoView(true, {behavior: "smooth"});
    }

    handleAwardsClick = () => {
        var element = document.getElementById("awards");
        element.scrollIntoView(true, {behavior: "smooth"});
    }

    handleCoursesClick = () => {
        var element = document.getElementById("courses");
        element.scrollIntoView(true, {behavior: "smooth"});
    }

    handleMadLibsClick = () => {
        var element = document.getElementById("madLibs");
        element.scrollIntoView(true, {behavior: "smooth"});
    }

    render() {
        return (
            <div className="nav">
                <a href="#about" onClick={this.handleAboutClick} value="about">ABOUT</a> 
                <a href="#projects" onClick={this.handleProjectsClick} value="projects">PROJECTS</a>
                <a href="#awards" onClick={this.handleAwardsClick} value="awards">AWARDS</a>
                <a href="#courses" onClick={this.handleCoursesClick} value="courses">STEM COURSES TAKEN</a>
                <a href="#madlibs" onClick={this.handleMadLibsClick} value="madLibs">MADLIBS</a>
            </div>
        );
    }
}

export default Nav;