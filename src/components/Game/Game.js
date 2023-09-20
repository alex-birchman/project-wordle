import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess, makeGameGrid } from "../../game-helpers";
import {
    NUM_OF_GUESSES_ALLOWED,
    NUM_OF_LETTERS_ALLOWED,
    GAME_STATUS,
    LETTER_STATUS,
} from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GuessKeyboard from "../GuessKeyboard/GuessKeyboard";
import Banner from "../Banner/Banner";

function Game() {
    const [answer, setAnswer] = React.useState(sample(WORDS));
    const [gameStatus, setGameStatus] = React.useState(GAME_STATUS.IN_PROGRESS);
    const [userGuessesCount, setUserGuessesCount] = React.useState(0);
    const [guesses, setGuesses] = React.useState(
        makeGameGrid(NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS_ALLOWED)
    );
    const isGameOver = gameStatus !== GAME_STATUS.IN_PROGRESS;

    const handleAddGuess = (guess) => {
        const guessCheckedResult = Object.entries(
            checkGuess(guess, answer)
        ).map(([_, { letter, status }]) => {
            return {
                letter,
                status,
            };
        });

        const nextGuesses = [...guesses];

        if (userGuessesCount < NUM_OF_GUESSES_ALLOWED) {
            const updatedGuessRow = nextGuesses[userGuessesCount].word.map(
                (letter, index) => ({
                    id: letter.id,
                    ...guessCheckedResult[index],
                })
            );
            nextGuesses[userGuessesCount].word = updatedGuessRow;
            setGuesses(nextGuesses);
        }

        let nextAnsweredWords = userGuessesCount + 1;
        setUserGuessesCount(nextAnsweredWords);

        if (
            nextGuesses[userGuessesCount].word.every(
                (letter) => letter.status === LETTER_STATUS.CORRECT
            )
        ) {
            setGameStatus(GAME_STATUS.WON);
            return;
        }

        if (nextAnsweredWords === NUM_OF_GUESSES_ALLOWED) {
            setGameStatus(GAME_STATUS.LOOSE);
            return;
        }
    };

    const handleRestartGame = () => {
        setAnswer(sample(WORDS));
        setGameStatus(GAME_STATUS.IN_PROGRESS);
        setUserGuessesCount(0);
        setGuesses(
            makeGameGrid(NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS_ALLOWED)
        );
    };

    return (
        <>
            <GuessResults guesses={guesses} />
            <GuessInput handleAddGuess={handleAddGuess} disabled={isGameOver} />
            <GuessKeyboard guesses={guesses} />
            {isGameOver && (
                <Banner
                    gameStatus={gameStatus}
                    userGuessesCount={userGuessesCount}
                    answer={answer}
                    handleRestartGame={handleRestartGame}
                />
            )}
        </>
    );
}

export default Game;
