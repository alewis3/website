var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * NAMING SCHEME:
 * N -> SINGULAR NOUN
 * PN -> PLURAL NOUN
 * FN -> FEMALE NAME
 * MN -> MALE NAME
 * AJ -> ADJECTIVE
 * AV -> ADVERB
 * V -> VERB
 * VD -> VERB ENDING IN 'ED'
 * VG -> VERB ENDING IN 'ING'
 * VS -> VERB ENDING IN 'S'
 * F -> FOOD
 * C -> COLOR
 * BP -> BODY PART
 */
const madLibSchema = new Schema({
    madLibNumber: {
        unique: true,
        required: true,
        type: Number
    },
    nounsNeeded: {type: Number, default: 0},
    pluralNounsNeeded: {type: Number, default: 0},
    femaleNamesNeeded: {type: Number, default: 0},
    maleNamesNeeded: {type: Number, default: 0},
    adjectivesNeeded: {type: Number, default: 0},
    adverbsNeeded: {type: Number, default: 0},
    verbsNeeded: {type: Number, default: 0},
    verbsEdNeeded: {type: Number, default: 0},
    verbsIngNeeded: {type: Number, default: 0},
    verbsSNeeded: {type: Number, default: 0},
    colorsNeeded: {type: Number, default: 0},
    foodsNeeded: {type: Number, default: 0},
    bodyPartsNeeded: {type: Number, default: 0},
    story: {type: [String], required: true}
});

module.exports = mongoose.model('MadLib', madLibSchema);