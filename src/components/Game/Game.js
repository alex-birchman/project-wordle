import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED, GAME_RESULT } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [gameResult, setGameResult] = React.useState(GAME_RESULT.IN_PROGRESS);
    const [guesses, setGuesses] = React.useState([]);
    const isGameOver = gameResult !== GAME_RESULT.IN_PROGRESS;

    const handleAddGuess = (guess) => {
        const guessCheckedResult = {
            id: guess.id,
            word: Object.entries(checkGuess(guess.word, answer)).map(
                ([_, { letter, status }]) => {
                    return {
                        letter,
                        status,
                    };
                }
            ),
        };

        const nextGuesses = [...guesses];

        if (nextGuesses.length < NUM_OF_GUESSES_ALLOWED) {
            nextGuesses.push(guessCheckedResult);
            setGuesses(nextGuesses);
        }

        if (
            guessCheckedResult.word.length === 5 &&
            guessCheckedResult.word.every(
                (letter) => letter.status === "correct"
            )
        ) {
            setGameResult(GAME_RESULT.WON);
            return;
        }

        if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
            setGameResult(GAME_RESULT.LOOSE);
            return;
        }
    };

    return (
        <>
            <GuessResults guesses={guesses} />
            <GuessInput handleAddGuess={handleAddGuess} disabled={isGameOver} />
            {isGameOver && (
                <Banner
                    gameResult={gameResult}
                    guesses={guesses}
                    answer={answer}
                />
            )}
        </>
    );
}

export default Game;
