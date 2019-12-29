import React, { Component } from 'react';

import './CSS/MadLibs.css';
import axios from "axios";
import OverflowScrolling from 'react-overflow-scrolling';

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
            bodyParts: [],
            showPopup: false};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.ReturnMadLibs = this.ReturnMadLibs.bind(this);
    }

    togglePopup() {
        this.setState({showPopup: !this.state.showPopup});
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
        //axios.get('http://localhost:5000/api/madlib').then(function(response) {
        axios.get('https://amandalewisdev.com/api/madlib').then(function(response) {
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
            return (
            <div>
                <h2> Let's Play Mad Libs! </h2>
                <button onClick={this.togglePopup.bind(this)}> ? </button>
                {this.state.showPopup ?
                    <Popup closePopup={this.togglePopup.bind(this)}/>
                    : null
                }
            <GetMadLibs
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
                returnMadLibs={this.ReturnMadLibs.bind(this)}
            />
            </div>
            )
        }
        else {
            let storyArray = this.state.data.story;
            return (
                <div className="madLibs">
                    <h2> Let's Play Mad Libs! </h2>
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
            nouns: this.fillWithEmptyStrings([], this.props.nouns),
            pluralNouns: this.fillWithEmptyStrings([], this.props.pluralNouns),
            femaleNames: this.fillWithEmptyStrings([], this.props.femaleNames),
            maleNames: this.fillWithEmptyStrings([], this.props.maleNames),
            adjectives: this.fillWithEmptyStrings([], this.props.adjectives),
            adverbs: this.fillWithEmptyStrings([], this.props.adverbs),
            verbs: this.fillWithEmptyStrings([], this.props.verbs),
            verbsEd: this.fillWithEmptyStrings([], this.props.verbsEd),
            verbsS: this.fillWithEmptyStrings([], this.props.verbsS),
            verbsIng: this.fillWithEmptyStrings([], this.props.verbsIng),
            colors: this.fillWithEmptyStrings([], this.props.colors),
            foods: this.fillWithEmptyStrings([], this.props.foods),
            bodyParts: this.fillWithEmptyStrings([], this.props.bodyParts),
            done: false,
            errorMessage:""
        };

    }

    fillWithEmptyStrings(arr, len) {
        for(var i = 0; i < len; i++) {
            arr[i] = "";
        }
        return arr;
    }

    checkNotEmpty(arr, len) {
        var valid = true;
        if (arr.length !== len) {
            valid = false;
        }
        else {
            for (var i = 0; i < len; i++) {
                let str = arr[i];
                if (str.length === 0) {
                    valid = false;
                }
            }
        }
        return valid;
    }

    checkDone() {
        if (
            this.checkNotEmpty(this.state.nouns, this.props.nouns) &&
            this.checkNotEmpty(this.state.pluralNouns, this.props.pluralNouns) &&
            this.checkNotEmpty(this.state.femaleNames, this.props.femaleNames) &&
            this.checkNotEmpty(this.state.maleNames, this.props.maleNames) &&
            this.checkNotEmpty(this.state.adjectives, this.props.adjectives) &&
            this.checkNotEmpty(this.state.adverbs, this.props.adverbs) &&
            this.checkNotEmpty(this.state.verbs, this.props.verbs) &&
            this.checkNotEmpty(this.state.verbsEd, this.props.verbsEd) &&
            this.checkNotEmpty(this.state.verbsS, this.props.verbsS) &&
            this.checkNotEmpty(this.state.verbsIng, this.props.verbsIng) &&
            this.checkNotEmpty(this.state.colors, this.props.colors) &&
            this.checkNotEmpty(this.state.foods, this.props.foods) &&
            this.checkNotEmpty(this.state.bodyParts, this.props.bodyParts)
        ) {
            this.setState({done: true, errorMessage:""});
            this.props.returnMadLibs(
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
        console.log(i);
        console.log(e);
        var newValues = this.state.nouns.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handlePluralNounChange = (i, e) => {
        var newValues = this.state.pluralNouns.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleFemaleNameChange = (i, e) => {
        var newValues = this.state.femaleNames.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleMaleNameChange = (i, e) => {
        var newValues = this.state.maleNames.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleAdjectiveChange = (i, e) => {
        var newValues = this.state.adjectives.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleAdverbChange = (i, e) => {
        var newValues = this.state.adverbs.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleVerbChange = (i, e) => {
        var newValues = this.state.verbs.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleVerbEdChange = (i, e) => {
        var newValues = this.state.verbsEd.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleVerbSChange = (i, e) => {
        var newValues = this.state.verbsS.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleVerbIngChange = (i, e) => {
        var newValues = this.state.verbsIng.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleColorChange = (i, e) => {
        var newValues = this.state.colors.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleFoodChange = (i, e) => {
        var newValues = this.state.foods.slice();
        newValues[i] = e.target.value.toUpperCase();
        this.setState({nouns: newValues});
    };

    handleBodyPartChange = (i, e) => {
        var newValues = this.state.bodyParts.slice();
        newValues[i] = e.target.value.toUpperCase();
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
                <div className="textEntry" key={n}>
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
                <div className="textEntry" key={pn}>
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
                <div className="textEntry" key={fn}>
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
                <div className="textEntry" key={mn}>
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
                <div className="textEntry" key={aj}>
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
                <div className="textEntry" key={av}>
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
                <div className="textEntry" key={v}>
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
                <div className="textEntry" key={vd}>
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
                <div className="textEntry" key={vs}>
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
                <div className="textEntry" key={vg}>
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
                <div className="textEntry" key={c}>
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
                <div className="textEntry"key={f}>
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
                <div className="textEntry" key={bp}>
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
                    onClick={this.checkDone.bind(this)}
                />
                <p id='error'>{this.state.errorMessage}</p>
            </div>
        )
    }
}

class Popup extends Component {
    render() {
        const madLibsExplanation = "Mad Libs is a game where you enter a number of random words, according to the type of word that should be entered. Possible types of words are singular or plural nouns, verbs ending in 's', 'ing' or 'ed', adjectives and adverbs, names, foods, colors, etc. See the explanations below for further clarification on types of words.";
        const nounsExplanation = "A singular noun is a word used to identify a person, place or thing. \ne.g. school, book, shoe, bee, etc.";
        const pluralNounsExplanation = "A plural noun is any word used to identify any class of people, places, or things. \ne.g. schools, books, shoes, bees, etc.";
        const adjectivesExplanation = "An adjective is any word used to modify a noun or describe its attributes. \ne.g. happy, ancient, smart, or tiny, etc.";
        const adverbsExplanation = "An adverb is a word that modifies a verb, an adjective or another adverb. They usually will end in an 'ly' but not always. \ne.g. eagerly, quickly, patiently, politely, etc.";
        const verbsExplanation = "A verb is a word that describes an action being done. The type of verb needed here has no ending on it, such as play, skip, snap, or stop.";
        const verbsEdExplanation = "A verb is a word that describes an action being done. The type of verb needed here will have an 'ed' on the end signifying the past tense, such as played, skipped, snapped, or stopped;";
        const verbsSExplanation = "A verb is a word that describes an action being done. The type of verb needed here will have an 's' on the end, signifying that the action is currently being done, such as plays, skips, snaps, or stops.";
        const verbsIngExplanation = "A verb is a word that describes an action being done. The type of verb needed here will have an 'ing' on the end, signifying that the action is currently being done, such as playing, skipping, snapping, or stopping.";

        return (
            <div className='popup'>
                <OverflowScrolling className='popup_inner'>
                    <h3>{madLibsExplanation}</h3>
                    <h4>Singular nouns: </h4>
                    <p>{nounsExplanation}</p>
                    <h4>Plural nouns: </h4>
                    <p>{pluralNounsExplanation}</p>
                    <h4>Adjectives: </h4>
                    <p>{adjectivesExplanation}</p>
                    <h4>Adverbs: </h4>
                    <p>{adverbsExplanation}</p>
                    <h4>Verbs: </h4>
                    <p>{verbsExplanation}</p>
                    <h4>Verbs ending in 'ed': </h4>
                    <p>{verbsEdExplanation}</p>
                    <h4>Verbs ending in 's': </h4>
                    <p>{verbsSExplanation}</p>
                    <h4>Verbs ending in 'ing': </h4>
                    <p>{verbsIngExplanation}</p>
                    <button className="close" onClick={this.props.closePopup}>Close Me</button>
                </OverflowScrolling>
            </div>
        );
    }
}

export default MadLibs;