import React, { Component } from 'react';

import './CSS/Nav.css';

class Nav extends Component {

    handleAboutClick = () => {
        var element = document.getElementById("about");
        element.scrollIntoView(true, {behavior: "smooth"});
    }

    handleProjectsClick = () => {
        var element = document.getElementById("projects-internships");
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

    handleContactClick = () => {
        var element = document.getElementById("contact");
        element.scrollIntoView(true, {behavior: "smooth"});
    }

    render() {
        return (
            <div className="nav">
                <a href="#about" onClick={this.handleAboutClick} value="about">ABOUT</a> 
                <a href="#projects" onClick={this.handleProjectsClick} value="projects-internships">PROJECTS</a>
                <a href="#awards" onClick={this.handleAwardsClick} value="awards">AWARDS</a>
                <a href="#courses" onClick={this.handleCoursesClick} value="courses">STEM COURSES TAKEN</a>
                <a href="#contact" onClick={this.handleContactClick} value="contact">CONTACT</a>
            </div>
        );
    }
}

export default Nav;