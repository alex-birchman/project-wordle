import React from "react";

import { range } from "../../utils";

function Guess({ guess }) {
    const letters = guess.value.split("");

    return (
        <p className="guess">
            {range(0, 5).map((item) => (
                <span key={item} className="cell">
                    {letters[item]}
                </span>
            ))}
        </p>
    );
}

export default Guess;
