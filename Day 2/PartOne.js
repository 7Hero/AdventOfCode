const { ShapesPlayed, Scores, GuideResponse, Shapes } = require('./enums.js');

const calculateScore = (elfShape, myShape) => {
    if (ShapesPlayed[elfShape] === ShapesPlayed[myShape]) {
        return Scores.DRAW + Scores[myShape];
    }

    switch (elfShape) {
        case Shapes.ROCK:
            return myShape === GuideResponse.PAPER ? Scores.WIN + Scores[myShape] : Scores.LOSS + Scores[myShape];
        case Shapes.PAPER:
            return myShape === GuideResponse.SCISSORS ? Scores.WIN + Scores[myShape] : Scores.LOSS + Scores[myShape];
        case Shapes.SCISSORS:
            return myShape === GuideResponse.ROCK ? Scores.WIN + Scores[myShape] : Scores.LOSS + Scores[myShape];   
    }
}

module.exports = calculateScore;