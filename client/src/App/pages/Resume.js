import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import './Resume.css';
import Experience from "../components/Experience";
import Intro from "../components/Intro";

class Resume extends Component {
    render() {
        const bio = "Experienced Teaching Assistant (Java and Python) looking to transition " +
            "into a full-time Software Engineering position as a backend or full-stack developer.";
        const HeaderImg = () => (
            <img className="HeaderImg" src={"/header.png"} alt="header"/>
        );
        return (
            <div className="App">
                <div className="HeaderWrapper">
                    <HeaderImg/>
                    <h1 id={"Name"}>Amanda G. Lewis</h1>
                    <p id={"Tagline"}>SOFTWARE DESIGNER AND ENGINEER</p>
                </div>
                <Intro text={bio}/>
                <Experience/>
                <ScrollUpButton
                    StopPosition={0}
                    ShowAtPosition={150}
                    EasingType='easeOutCubic'
                    AnimationDuration={500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                    style={{"backgroundColor": "#6F3524", "bottom": "60px"}}
                    ToggledStyle={{}}
                />
            </div>
        );
    }
}
export default Resume;
