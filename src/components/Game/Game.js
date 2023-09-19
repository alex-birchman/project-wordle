import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    const handleAddGuess = (guess) => {
        if (guesses.length < NUM_OF_GUESSES_ALLOWED)
            setGuesses((prevGuesses) => [...prevGuesses, guess]);
    };

    return (
        <>
            <GuessResults guesses={guesses} answer={answer} />
            <GuessInput handleAddGuess={handleAddGuess} />
        </>
    );
}

export default Game;
