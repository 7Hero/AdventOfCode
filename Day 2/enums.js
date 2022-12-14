const Shapes = {
    ROCK: 'A',
    PAPER: 'B',
    SCISSORS: 'C'
}

const ShapesPlayed = {
    A: 'ROCK',
    B: 'PAPER',
    C: 'SCISSORS',
    X: 'ROCK',
    Y: 'PAPER',
    Z: 'SCISSORS'
}

const GuideResponse = {
    PAPER: 'Y',
    ROCK: 'X',
    SCISSORS: 'Z'
}

const Scores = {
    WIN: 6,
    DRAW: 3,
    LOSS: 0,
    X: 1,
    Y: 2,
    Z: 3,
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3
}

const ShapesInverse = {
    A: 'ROCK',
    B: 'PAPER',
    C: 'SCISSORS'
}

const GuideStrategy = {
    WIN: 'Z',
    LOSE: 'X',
    DRAW: 'Y'
}

module.exports = {
    Shapes,
    ShapesPlayed,
    GuideResponse,
    Scores,
    GuideStrategy,
    ShapesInverse
}