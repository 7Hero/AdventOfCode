const { Shapes, ShapesInverse, GuideStrategy, Scores } = require('./enums.js');

const calculateScore = (elfShape, myStrategy) => {
    if( myStrategy === GuideStrategy.DRAW ) {
        return Scores.DRAW + Scores[ShapesInverse[elfShape]];
    }

    if( myStrategy === GuideStrategy.WIN) {
        switch(elfShape) {
            case Shapes.ROCK:
                return Scores.WIN + Scores.PAPER;
            case Shapes.PAPER:
                return Scores.WIN + Scores.SCISSORS;
            case Shapes.SCISSORS:
                return Scores.WIN + Scores.ROCK;
        }
    }

    if( myStrategy === GuideStrategy.LOSE) {
        switch(elfShape) {
            case Shapes.ROCK:
                return Scores.LOSS + Scores.SCISSORS;
            case Shapes.PAPER:
                return Scores.LOSS + Scores.ROCK;
            case Shapes.SCISSORS:
                return Scores.LOSS + Scores.PAPER;
        }
    }
}

module.exports = calculateScore;

