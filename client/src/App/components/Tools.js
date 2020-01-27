import React, { Component } from 'react';
import './CSS/Languages.css';

// A smaller component for just one skill
class Language extends Component {
    Stars(proficiencyLevel) {
        var starsArray = [];
        for (var i = 0; i < proficiencyLevel; i++){
            starsArray.push(<img alt={"star"} src={"/star_icon.png"}/>)
        }
        return <div>{starsArray}</div>
    }
    render() {
        return <li>{this.props.language} <br /> {<Stars(this.props.proficiencyLevel)/>}</li>
    }
}

class Languages extends Component {
    render() {
        return (
            <div>
                <Language language={"Java"} proficiencyLevel={5}/>
                <Language language={"Python"} proficiencyLevel={5}/>
                <Language language={"Javascript (Frameworks: React, Node, Express)"} proficiencyLevel={5}/>
                <Language language={"PHP"} proficiencyLevel={5}/>
                <Language language={"Swift"} proficiencyLevel={5}/>
            </div>
        )
    }
}

export default Languages;