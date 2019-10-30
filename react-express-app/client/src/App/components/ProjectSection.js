import React, { Component } from 'react';
import './ProjectSection.css';

import Project from './Project';

class ProjectSection extends Component {
    render() {
        const IoTBio = "(In progress) Amanda is currently working on a scrum team of 6 to build a system that utilizes Digital Transformation and the Internet of Things to further automate the smart home management process.";
        const JVMTBio = "Over the summer of 2019, Amanda embarked on a personal project to redo the vehicle simulator written in python for the We-Go project, except in java this time. The results are on her github, under her Personal repo.";
        const ModBio = "Over the summer of 2019, Amanda worked at Modernize, a company that connects homeowners with contractors to make home renovations easier. She worked on the 'core' team in an agile development lifecycle on a scrum team of about 10. She worked on tickets ranging from bug fixes to new features.";
        const GoBio = "In the Spring of 2019, Amanda took the SWE I class and worked on a scrum team of 6 to build a system that would utilize (simulated) automated vehicles to deliver services and goods to consumers. She oversaw the building of the vehicle simulator, written in python and using multithreading to simulte multiple vehicles at once."
        const ProjectSection = () => (
            <div className="project-section">
                <Project title="SWE II We-IoT Project" description={IoTBio} src="./public/We-IoT.png" alt="We-IoT Logo"/>
                <Project title="Java Multithreading Vehicle Simulator Project" description={JVMTBio} src="./public/java.jpg" alt="Java Logo"/>
                <Project title="Software Engineering Internship" description={ModBio} src="./public/mod_logo.png" alt="Modernize Logo"/>
                <Project title="SWE I We-Go Project" description={GoBio} src="./public/We-Go.png" alt="We-Go Logo"/>
            </div>
        )
        return <ProjectSection/>;
    }
}

export default ProjectSection;