import React, { Component } from 'react';
import './CSS/Tools.css';

// A smaller component for just one skill
class Tool extends Component {
    render() {
        function Stars(proficiencyLevel) {
            var starsArray = [];
            for (var i = 0; i < proficiencyLevel; i++){
                starsArray.push(<img className="star" alt={"star"} src={"/star_icon.png"}/>)
            }
            return <div>{starsArray}</div>
        }
        return <li className={"Tool"}>{this.props.tool}: {Stars(this.props.proficiencyLevel)}</li>
    }
}

class Tools extends Component {
    render() {
        return (
            <div className={"TechnicalTools"}>
                <h2>Technical Tools</h2>
                <div className={"TechnicalToolsSection"}>
                    <div className={"ToolList"}>
                        <h4>Programming Languages: Object Oriented, Scripting, Markup, and Query</h4>
                        <ul className={"List"}>
                            <Tool tool={"Java/JUnit"} proficiencyLevel={5}/>
                            <Tool tool={"Python"} proficiencyLevel={5}/>
                            <Tool tool={"Javascript (Including JQuery, React, Node, Express)"} proficiencyLevel={5}/>
                            <Tool tool={"HTML"} proficiencyLevel={5}/>
                            <Tool tool={"SQL"} proficiencyLevel={4}/>
                            <Tool tool={"PHP"} proficiencyLevel={4}/>
                            <Tool tool={"Swift"} proficiencyLevel={3}/>
                        </ul>
                    </div>
                    <div className={"ToolList"}>
                        <h4>Protocols/Patterns</h4>
                        <ul className={"List"}>
                            <Tool tool={"HTTP/HTTPS"} proficiencyLevel={5}/>
                            <Tool tool={"REST"} proficiencyLevel={5}/>
                            <Tool tool={"SSH/FTP"} proficiencyLevel={5}/>
                            <Tool tool={"SOAP"} proficiencyLevel={3}/>
                            <Tool tool={"TCP/IP"} proficiencyLevel={3}/>
                        </ul>
                    </div>
                    <div className={"ToolList"}>
                        <h4>Integrated Development Environments</h4>
                        <ul className={"List"}>
                            <Tool tool={"Visual Studio"} proficiencyLevel={5}/>
                            <Tool tool={"Jetbrains IDEs (IntelliJ Idea, Webstorm, Pycharm, PHPStorm)"} proficiencyLevel={5}/>
                            <Tool tool={"Eclipse"} proficiencyLevel={5}/>
                        </ul>
                    </div>
                    <div className={"ToolList"}>
                        <h4>Operating Systems</h4>
                        <ul className={"List"}>
                            <Tool tool={"OSX/iOS"} proficiencyLevel={5}/>
                            <Tool tool={"Linux/Unix"} proficiencyLevel={4}/>
                            <Tool tool={"Windows"} proficiencyLevel={4}/>
                        </ul>
                    </div>
                    <div className={"ToolList"}>
                        <h4>Databases</h4>
                        <ul className={"List"}>
                            <Tool tool={"MySQL"} proficiencyLevel={5}/>
                            <Tool tool={"MongoDB"} proficiencyLevel={5}/>
                        </ul>
                    </div>
                    <div className={"ToolList"}>
                        <h4>Object/Document Notation</h4>
                        <ul className={"List"}>
                            <Tool tool={"JSON"} proficiencyLevel={5}/>
                            <Tool tool={"XML"} proficiencyLevel={3}/>
                        </ul>
                    </div>
                    <div className={"ToolList"}>
                        <h4>IaaS/PaaS/CaaS</h4>
                        <ul className={"List"}>
                            <Tool tool={"DigitalOcean"} proficiencyLevel={5}/>
                            <Tool tool={"Heroku"} proficiencyLevel={2}/>
                            <Tool tool={"Docker"} proficiencyLevel={2}/>
                        </ul>
                    </div>
                    <div className={"ToolList"}>
                        <h4>Version Control Systems</h4>
                        <ul className={"List"}>
                            <Tool tool={"Git"} proficiencyLevel={5}/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tools;