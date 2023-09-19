import React from "react";

import Guess from "../Guess/Guess";

function GuessResults({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.map((guess) => (
                <Guess key={guess.id} word={guess.word} />
            ))}
        </div>
    );
}

export default GuessResults;
