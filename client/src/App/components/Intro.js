import React, { Component } from 'react';
import './CSS/Intro.css';
import Contact from "./Contact";
import Skills from "./Skills";
import Tools from "./Tools";

class Intro extends Component {
    render() {
        var skillsStrings = ["Maintain a clean and organized work environment", "Diffuse tension in emotional situations and conflicts", "Effectively communicate current priorities and issues to managers", "Ability to problem-solve quickly and with ease", "Easily connect with customers and coworkers"];
        const skillsArray = skillsStrings.map((skill) =>
            <li>{skill}</li>
        );
        return (
            <div className={"Intro"}>
                <div className={"Floats"}>
                    <div className={"Left"}>
                        <Contact/>
                        <Skills skills={skillsArray}/>
                    </div>
                    <div className={"Right"}>
                        <img id="Me" alt={"me"} src={"linkedin.jpg"}/>
                        <br/>
                        <h2>Objective:</h2>
                        <p id={"ObjectiveText"}>{this.props.text}</p>
                        <br/>
                        <div className={"Education"}>
                            <h2>Education:</h2> <br/>
                            <strong>St. Edward's University</strong> - <i>Austin, TX</i> <br/>
                            <strong>BS in Computer Science</strong> - <i>Grad. May 2020</i> <br/>
                            <p>Minor in Mathematics; 3.76 Cumulative GPA</p>
                        </div>
                    </div>
                    <div className={"clear"}/>
                </div>
                <Tools/>
            </div>
        )
    }
}

export default Intro;