import React from "react";

function Guess({ word }) {
    return (
        <p className="guess">
            {word.map(({ id, letter, status }) => (
                <span key={id} className={`cell ${status ?? ""}`}>
                    {letter}
                </span>
            ))}
        </p>
    );
}

export default Guess;
