import React, { Component } from 'react';
import './CSS/ProjectSection.css';

import Project from './Project';

class ProjectSection extends Component {
    render() {
        function IoTBio() {
            return {__html: "In this class, I worked on a scrum team of 6 to build a system that utilized Digital Transformation and the Internet of Things to further automate the smart home management process. I was in charge of building a 'gateway' for our simulated IoT devices to communicate to the server through, and I also oversaw the documentation of the Command in Control API."};
        }
        function JVMTBio() {
            return {__html: "Over the summer of 2019, I embarked on a personal project to redo the vehicle simulator written in python for the We-Go project, except in java this time. The results are on my github, under the <a href='https://github.com/alewis3/Personal/tree/master/vehicleSimulatorJava' target='_blank'>Personal</a> repo."}
        }
        function ModBio() {
            return {__html: "Over the summer of 2019, I worked at <a href='https://modernize.com/' target='_blank'>Modernize</a>, a company that connects homeowners with contractors to make home renovations easier. I worked on the 'core' team in an agile development lifecycle on a scrum team of about 10. I worked on tickets ranging from bug fixes to new features."}
        }
        function GoBio() {
            return {__html: "In the Spring of 2019, I took the SWE I class and worked on a scrum team of 6 to build a system that would utilize (simulated) automated vehicles to deliver services and goods to consumers. I oversaw the building of the vehicle simulator, written in python and using multithreading to simulate multiple vehicles at once. The results are on my github, under the <a href='https://github.com/alewis3/Personal/tree/master/vehicleSimulatorPython' target='_blank'>Personal</a> repo."}
        }
        function SPBio() {
            return {__html: "Over the course of two semesters I worked on my senior project with two other individuals. The project, entitled <i>Host, Post, and Compost </i> focused on connecting people who are not able to compost (People who live in apartments or staying in hotels) with people who can compost and already do so (Homeowners with a pile in their backyard or a compost pickup service)."}
        }
        const ProjectSection = () => (
            <div className="projects" id="projects">
                <h1>Projects and Internships</h1>
                <div className="project-section">
                    <Project title="Host, Post, and Compost (Senior Project)" description={SPBio()} src="/HPC.png" alt="HPC" />
                    <Project title="We-IoT Project" description={IoTBio()} src="/We-IoT.png" alt="We-IoT Logo"/>
                    <Project title="Java Multithreading Vehicle Simulator Project" description={JVMTBio()} src="/java.jpg" alt="Java Logo"/>
                    <Project title="Software Engineering Internship" description={ModBio()} src="/mod_logo.png" alt="Modernize Logo"/>
                    <Project title="We-Go Project" description={GoBio()} src="/We-Go.png" alt="We-Go Logo"/>
                </div>
            </div>
        )
        return <ProjectSection/>;
    }
}

export default ProjectSection;