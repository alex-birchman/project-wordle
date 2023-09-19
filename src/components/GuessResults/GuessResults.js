import React from "react";

import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
    return (
        <div className="guess-results">
            {guesses.map((guess) => (
                <Guess key={guess.word} word={guess.word} answer={answer} />
            ))}
        </div>
    );
}

export default GuessResults;
