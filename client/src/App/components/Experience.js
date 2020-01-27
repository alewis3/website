import React, { Component } from 'react';
import './CSS/Experience.css';
import Project from './Project';
import Awards from './Awards';


class Work extends Component {
    render() {

        const TitleAndDescription = () => {
            return (
                <div className="work-bio">
                    <b>{this.props.company}</b> - Austin, TX - <i>{this.props.position}</i> <br/>
                    <p>{this.props.timePeriod}</p> <br/>
                    <ul className={"Responsibilities"}>{this.props.responsibilities.map((item) => {return <li>{item}</li>})}</ul>
                </div>
            );
        };
        return (
            <div className="work">
                <TitleAndDescription/>
            </div>
        );
    }
}

class Experience extends Component {
    render() {
        const WorkSection = () => {
            const steds = "St. Edward's University";
            const sweResponsibilities = ["Advise teams of five to six in advanced Software Engineering courses on topics relating to their semester-long TaaS project","Conduct weekly TA Meetings in an organized manner and answer questions and concerns for each of the teams from an agenda the teams prepare beforehand", "Advise instructor on possible ways to improve the course from the perspective of a student who has finished two semesters of Software Engineering courses"];
            const conceptsResponsibilities = ["Assist students in introductory programming (Python/Java) classes during weekly labs", "Facilitate weekly night sessions for extra help and advising on Python and Java problems"];
            const tutorResponsibilities = ["Assist students from basic Mathematics to Advanced Calculus with homework problems and general study sessions", "Monitor students and maintain a quiet environment in the Math Lab"];
            const internResponsibilities = ["Worked on an agile scrum team of ten developers", "Reported current priorities and issues to the team daily every morning during standup", "Received ticket assignments every sprint and worked to complete all or most tickets by the end of each sprint, keeping backlog to a minimum"];
            const walgreensResponsibilities = ["Promoted Beauty-Must-Have (BMH) sales events", "Learned about individual customers and their priorities to improve my ability to recommend products based on customer needs", "Kept store well-maintained, aisles faced (products pulled to front of shelf), and all areas clean and organized"];
            return (
                <div className={"Works"}>
                    <h2 id={"WorkSectionTitle"} className={"Title"}>Work Experience</h2>
                    <div className={"WorkSection"}>
                        <Work src={"/steds_icon.png"} alt={steds} position={"Technical Advisor for Software Engineering I"} company={steds} timePeriod={"JAN 2020 - PRESENT"} responsibilities={sweResponsibilities}/>
                        <Work src={"/steds_icon.png"} alt={steds} position={"Teaching Assistant for Introductory Computer Science Courses"} company={steds} timePeriod={"JAN 2018 - PRESENT"} responsibilities={conceptsResponsibilities}/>
                        <Work src={"/steds_icon.png"} alt={steds} position={"Math Tutor at the Math Lab"} company={steds} timePeriod={"AUG 2017 - PRESENT"} responsibilities={tutorResponsibilities}/>
                        <Work src={"/mod_logo.png"} alt={"Modernize"} position={"Software Engineering Intern"} company={"Modernize"} timePeriod={"MAY 2019 - AUG 2019"} responsibilities={internResponsibilities}/>
                        <Work src={"/walgreens_logo.png"} alt={"Walgreens"} position={"Customer Service Associate/Beauty Advisor"} company={"Walgreens"} timePeriod={"OCT 2015 - MAR 2017"} responsibilities={walgreensResponsibilities}/>
                    </div>
                </div>
            )
        };
        function IoTBio() {
            return {__html: "(In progress) Amanda is currently working on a scrum team of 6 to build a system that utilizes Digital Transformation and the Internet of Things to further automate the smart home management process."};
        }
        function JVMTBio() {
            return {__html: "Over the summer of 2019, Amanda embarked on a personal project to redo the vehicle simulator written in python for the We-Go project, except in java this time. The results are on her github, under her <a href='https://github.com/alewis3/Personal/tree/master/vehicleSimulatorJava' target='_blank'>Personal</a> repo."}
        }
        function GoBio() {
            return {__html: "In the Spring of 2019, Amanda took the SWE I class and worked on a scrum team of 6 to build a system that would utilize (simulated) automated vehicles to deliver services and goods to consumers. She oversaw the building of the vehicle simulator, written in python and using multithreading to simulte multiple vehicles at once."}
        }
        const ProjectSection = () => {
            return (
                <div className={"Projects"}>
                    <h2 id={"ProjectSectionTitle"} className={"Title"}>Projects</h2>
                    <div className={"ProjectSection"}>
                        <Project title="We-IoT Project" description={IoTBio()} src="/We-IoT.png" alt="We-IoT Logo"/>
                        <Project title="Java Multithreading Vehicle Simulator Project" description={JVMTBio()} src="/java.jpg" alt="Java Logo"/>
                        <Project title="We-Go Project" description={GoBio()} src="/We-Go.png" alt="We-Go Logo"/>
                    </div>
                </div>
            )
        };
        return (
            <div className={"Experience"}>
                <WorkSection/>
                <ProjectSection/>
                <Awards/>
            </div>
        )
    }
}

export default Experience;