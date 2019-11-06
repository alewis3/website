import React, { Component } from 'react';

import './CSS/Nav.css';

class Nav extends Component {

    handleClick = (event) => {
        var valueClicked = event.target.value;
        console.log(valueClicked + " " + typeof(valueClicked))
        var element = document.getElementById(valueClicked);
        element.scrollIntoView(true, {behavior: "smooth"});
    }

    handleAboutClick = () => {
        var element = document.getElementById("about");
        element.scrollIntoView(true, {behavior: "smooth"});
    }

    handleProjectsClick = () => {
        var element = document.getElementById("projects-internships");
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
                <a href="#courses" onClick={this.handleCoursesClick} value="courses">STEM COURSES TAKEN</a>
                <a href="#contact" onClick={this.handleContactClick} value="contact">CONTACT</a>
            </div>
        );
    }
}

export default Nav;