import React from "react";

import { range } from "../../utils";

function Guess({ word }) {
    const letters = range(0, 5).map((item) => ({
        id: crypto.randomUUID(),
        letter: word.length > item ? word[item].letter : undefined,
        className: word.length > item ? word[item].status : undefined,
    }));

    return (
        <p className="guess">
            {letters.map(({ id, letter, className }) => (
                <span key={id} className={`cell ${className}`}>
                    {letter}
                </span>
            ))}
        </p>
    );
}

export default Guess;
