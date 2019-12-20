import React, { Component } from 'react';

import './CSS/MadLibs.css';
import axios from "axios";

class MadLibs extends Component {
    constructor(props) {
        super(props);
        this.state = {data: {},
            isComplete: false,
            nouns: [],
            pluralNouns: [],
            femaleNames: [],
            maleNames: [],
            adjectives: [],
            adverbs: [],
            verbs: [],
            verbsEd: [],
            verbsS: [],
            verbsIng: [],
            colors: [],
            foods: [],
            bodyParts: []};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.ReturnMadLibs = this.ReturnMadLibs.bind(this);
    }

    ReturnMadLibs = (nounsArr, pluralNounsArr, femaleNamesArr, maleNamesArr, adjectivesArr, adverbsArr, verbsArr, verbsEdArr, verbsSArr, verbsIngArr, colorsArr, foodsArr, bodyPartsArr) => {
        this.setState({nouns: nounsArr,
            pluralNouns: pluralNounsArr,
            femaleNames: femaleNamesArr,
            maleNames: maleNamesArr,
            adjectives: adjectivesArr,
            adverbs: adverbsArr,
            verbs: verbsArr,
            verbsEd: verbsEdArr,
            verbsS: verbsSArr,
            verbsIng: verbsIngArr,
            colors: colorsArr,
            foods: foodsArr,
            bodyParts: bodyPartsArr,
            isComplete: true
        })
    };

    componentDidMount = () => {
        let comp = this;
        axios.get('http://localhost:5000/api/madlib').then(function(response) {
        //axios.get('https://amandalewisdev.com/api/madlib').then(function(response) {
            if (response.status === 200) {
                comp.setState({data: response.data});
            } else {
                console.log("Could not grab madlib");
            }
        }).catch(function (error) {
            console.log(error);
        });
    };

    parseStoryArray = (storyArr) => {
         var story = "";
         for (var i = 0; i < storyArr.length; i++) {
             var piece = storyArr[i];
             if (piece.length > 2) {
                 var subpiece2 = piece.substring(0, 2);
                 var pieceNumber2 = piece.substring(2, 3);
                 var number2 = -1;
                 if (subpiece2 === "PN") {
                     number2 = parseInt(pieceNumber2, 10);
                     story += this.state.pluralNouns[number2];
                 }
                 else if (subpiece2 === "FN") {
                     number2 = parseInt(pieceNumber2, 10);
                     story += this.state.femaleNames[number2];
                 }
                 else if (subpiece2 === "MN") {
                     number2 = parseInt(pieceNumber2, 10);
                     story += this.state.maleNames[number2];
                 }
                 else if (subpiece2 === "AD") {
                     number2 = parseInt(pieceNumber2, 10);
                     story += this.state.adjectives[number2];
                 }
                 else if (subpiece2 === "AV") {
                     number2 = parseInt(pieceNumber2, 10);
                     story += this.state.adverbs[number2];
                 }
                 else if (subpiece2 === "VD") {
                     number2 = parseInt(pieceNumber2, 10);
                     story += this.state.verbsEd[number2];
                 }
                 else if (subpiece2 === "VG") {
                     number2 = parseInt(pieceNumber2, 10);
                     story += this.state.verbsIng[number2];
                 }
                 else if (subpiece2 === "BP") {
                     number2 = parseInt(pieceNumber2, 10);
                     story += this.state.bodyParts[number2];
                 }
                 else {
                     var subpiece1 = piece.substring(0,1);
                     var pieceNumber1 = piece.substring(1, 2);
                     var number1 = -1;
                     if (subpiece1 === "N") {
                         number1 = parseInt(pieceNumber1, 10);
                         story += this.state.nouns[number1];
                     }
                     else if (subpiece1 === "V") {
                         number1 = parseInt(pieceNumber1, 10);
                         story += this.state.verbs[number1]
                     }
                     else if (subpiece1 === "F") {
                         number1 = parseInt(pieceNumber1, 10);
                         story += this.state.foods[number1];
                     }
                     else if (subpiece1 === "C") {
                         number1 = parseInt(pieceNumber1, 10);
                         story += this.state.colors[number1];
                     }
                     else {
                         story += piece;
                     }
                 }
             }
             else {
                 story += piece;
             }
         }
         return story;
    };


    render() {
        const isComplete = this.state.isComplete;
        if (!isComplete) {
            return <GetMadLibs
                nouns={this.state.data.nounsNeeded}
                pluralNouns={this.state.data.pluralNounsNeeded}
                femaleNames={this.state.data.femaleNamesNeeded}
                maleNames={this.state.data.maleNamesNeeded}
                adjectives={this.state.data.adjectivesNeeded}
                adverbs={this.state.data.adverbsNeeded}
                verbs={this.state.data.verbsNeeded}
                verbsEd={this.state.data.verbsEdNeeded}
                verbsS={this.state.data.verbsSNeeded}
                verbsIng={this.state.data.verbsIngNeeded}
                colors={this.state.data.colorsNeeded}
                foods={this.state.data.foodsNeeded}
                bodyParts={this.state.data.bodyPartsNeeded}
                callback={this.ReturnMadLibs}
            />
        }
        else {
            let storyArray = this.state.data.story;
            return (
                <div className="madLibs">
                    <p id="story">{this.parseStoryArray(storyArray)}</p>
                </div>
            )
        }
    }
}

class GetMadLibs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nouns: [],
            pluralNouns: [],
            femaleNames: [],
            maleNames: [],
            adjectives: [],
            adverbs: [],
            verbs: [],
            verbsEd: [],
            verbsS: [],
            verbsIng: [],
            colors: [],
            foods: [],
            bodyParts: [],
            done: false,
            errorMessage:""
        };
    }

    checkDone() {
        if (
            this.props.nouns === this.state.nouns.length &&
            this.props.pluralNouns === this.state.pluralNouns.length &&
            this.props.femaleNames === this.state.femaleNames.length &&
            this.props.maleNames === this.state.maleNames.length &&
            this.props.adjectives === this.state.adjectives.length &&
            this.props.adverbs === this.state.adverbs.length &&
            this.props.verbs === this.state.verbs.length &&
            this.props.verbsEd === this.state.verbsEd.length &&
            this.props.verbsS === this.state.verbsS.length &&
            this.props.verbsIng === this.state.verbsIng.length &&
            this.props.colors === this.state.colors.length &&
            this.props.foods === this.state.foods.length &&
            this.props.bodyParts === this.state.bodyParts.length
        ) {
            this.setState({done: true, errorMessage:""});
            this.props.callback(
                this.state.nouns,
                this.state.pluralNouns,
                this.state.femaleNames,
                this.state.maleNames,
                this.state.adjectives,
                this.state.adverbs,
                this.state.verbs,
                this.state.verbsEd,
                this.state.verbsS,
                this.state.verbsIng,
                this.state.colors,
                this.state.foods,
                this.state.bodyParts
            );
        }
        else {
            this.setState({errorMessage: "You did not fill out all fields!"});
        }
    };

    handleNounChange = (i, e) => {
        var newValues = this.state.nouns.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handlePluralNounChange = (i, e) => {
        var newValues = this.state.pluralNouns.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleFemaleNameChange = (i, e) => {
        var newValues = this.state.femaleNames.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleMaleNameChange = (i, e) => {
        var newValues = this.state.maleNames.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleAdjectiveChange = (i, e) => {
        var newValues = this.state.adjectives.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleAdverbChange = (i, e) => {
        var newValues = this.state.adverbs.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleVerbChange = (i, e) => {
        var newValues = this.state.verbs.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleVerbEdChange = (i, e) => {
        var newValues = this.state.verbsEd.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleVerbSChange = (i, e) => {
        var newValues = this.state.verbsS.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleVerbIngChange = (i, e) => {
        var newValues = this.state.verbsIng.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleColorChange = (i, e) => {
        var newValues = this.state.colors.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleFoodChange = (i, e) => {
        var newValues = this.state.foods.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    handleBodyPartChange = (i, e) => {
        var newValues = this.state.bodyParts.slice();
        newValues[i] = e.target.value;
        this.setState({nouns: newValues});
    };

    render() {
        var nounsArray = [];
        var pluralNounsArray = [];
        var femaleNamesArray = [];
        var maleNamesArray = [];
        var adjectivesArray = [];
        var adverbsArray = [];
        var verbsArray = [];
        var verbsEdArray = [];
        var verbsSArray = [];
        var verbsIngArray = [];
        var colorsArray = [];
        var foodsArray = [];
        var bodyPartsArray = [];

        for (var n = 0; n < this.props.nouns; n++) {
            nounsArray.push(
                <div className="textEntry">
                    <p>Enter a Noun: </p>
                    <input
                        type='text'
                        value={this.state.nouns[n]}
                        name={this.state.nouns[n]}
                        onChange={this.handleNounChange.bind(this, n)} />
                </div>
            )
        }

        for (var pn = 0; pn < this.props.pluralNouns; pn++) {
            pluralNounsArray.push(
                <div className="textEntry">
                    <p>Enter a Plural Noun: </p>
                    <input
                        type='text'
                        value={this.state.pluralNouns[pn]}
                        name={this.state.pluralNouns[pn]}
                        onChange={this.handlePluralNounChange.bind(this, pn)} />
                </div>
            )
        }

        for (var fn = 0; fn < this.props.femaleNames; fn++) {
            femaleNamesArray.push(
                <div className="textEntry">
                    <p>Enter a Female Name: </p>
                    <input
                        type='text'
                        value={this.state.femaleNames[fn]}
                        name={this.state.femaleNames[fn]}
                        onChange={this.handleFemaleNameChange.bind(this, fn)} />
                </div>
            )
        }

        for (var mn = 0; mn < this.props.maleNames; mn++) {
            maleNamesArray.push(
                <div className="textEntry">
                    <p>Enter a Male Name: </p>
                    <input
                        type='text'
                        value={this.state.maleNames[mn]}
                        name={this.state.maleNames[mn]}
                        onChange={this.handleMaleNameChange.bind(this, mn)} />
                </div>
            )
        }

        for (var aj = 0; aj < this.props.adjectives; aj++) {
            adjectivesArray.push(
                <div className="textEntry">
                    <p>Enter an Adjective: </p>
                    <input
                        type='text'
                        value={this.state.adjectives[aj]}
                        name={this.state.adjectives[aj]}
                        onChange={this.handleAdjectiveChange.bind(this, aj)} />
                </div>
            )
        }

        for (var av = 0; av < this.props.adverbs; av++) {
            adverbsArray.push(
                <div className="textEntry">
                    <p>Enter an Adverb: </p>
                    <input
                        type='text'
                        value={this.state.adverbs[av]}
                        name={this.state.adverbs[av]}
                        onChange={this.handleAdverbChange.bind(this, av)} />
                </div>
            )
        }

        for (var v = 0; v < this.props.verbs; v++) {
            verbsArray.push(
                <div className="textEntry">
                    <p>Enter an Verb: </p>
                    <input
                        type='text'
                        value={this.state.verbs[v]}
                        name={this.state.verbs[v]}
                        onChange={this.handleVerbChange.bind(this, v)} />
                </div>
            )
        }

        for (var vd = 0; vd < this.props.verbsEd; vd++) {
            verbsEdArray.push(
                <div className="textEntry">
                    <p>Enter an Verb ending in 'ed': </p>
                    <input
                        type='text'
                        value={this.state.verbsEd[vd]}
                        name={this.state.verbsEd[vd]}
                        onChange={this.handleVerbEdChange.bind(this, vd)} />
                </div>
            )
        }

        for (var vs = 0; vs < this.props.verbsS; vs++) {
            verbsSArray.push(
                <div className="textEntry">
                    <p>Enter an Verb ending in 's': </p>
                    <input
                        type='text'
                        value={this.state.verbsS[vs]}
                        name={this.state.verbsS[vs]}
                        onChange={this.handleVerbSChange.bind(this, vs)} />
                </div>
            )
        }

        for (var vg = 0; vg < this.props.verbsIng; vg++) {
            verbsIngArray.push(
                <div className="textEntry">
                    <p>Enter an Verb ending in 'ing': </p>
                    <input
                        type='text'
                        value={this.state.verbsIng[vg]}
                        name={this.state.verbsIng[vg]}
                        onChange={this.handleVerbIngChange.bind(this, vg)} />
                </div>
            )
        }

        for (var c = 0; c < this.props.colors; c++) {
            colorsArray.push(
                <div className="textEntry">
                    <p>Enter a Color: </p>
                    <input
                        type='text'
                        value={this.state.colors[c]}
                        name={this.state.colors[c]}
                        onChange={this.handleColorChange.bind(this, c)} />
                </div>
            )
        }

        for (var f = 0; f < this.props.foods; f++) {
            foodsArray.push(
                <div className="textEntry">
                    <p>Enter a Food: </p>
                    <input
                        type='text'
                        value={this.state.foods[f]}
                        name={this.state.foods[f]}
                        onChange={this.handleFoodChange.bind(this, f)} />
                </div>
            )
        }

        for (var bp = 0; bp < this.props.bodyParts; bp++) {
            bodyPartsArray.push(
                <div className="textEntry">
                    <p>Enter a Body Part: </p>
                    <input
                        type='text'
                        value={this.state.bodyParts[bp]}
                        name={this.state.bodyParts[bp]}
                        onChange={this.handleBodyPartChange.bind(this, bp)} />
                </div>
            )
        }

        return (
            <div className="inputs">
                {nounsArray}
                {pluralNounsArray}
                {femaleNamesArray}
                {maleNamesArray}
                {adjectivesArray}
                {adverbsArray}
                {verbsArray}
                {verbsEdArray}
                {verbsSArray}
                {verbsIngArray}
                {colorsArray}
                {foodsArray}
                {bodyPartsArray}
                <input
                    type='submit'
                    value='Done'
                    onClick={this.checkDone}
                />
                <p id='error'>{this.state.errorMessage}</p>
            </div>
        )
    }
}

export default MadLibs;