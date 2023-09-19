import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
    const letters = checkGuess(word, answer);
    const checkedLetters = Object.entries(letters).map(
        ([_, { letter, status }]) => {
            return {
                letter,
                status,
            };
        }
    );

    return (
        <p className="guess">
            {range(0, 5).map((item) => {
                let letter = undefined;
                let letterClass = "";

                if (item < checkedLetters.length) {
                    letter = checkedLetters[item].letter;
                    letterClass = checkedLetters[item].status;
                }

                return (
                    <span key={item} className={`cell ${letterClass}`}>
                        {letter}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
