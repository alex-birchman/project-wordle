import React from "react";

import { GAME_RESULT } from "../../constants";

function Banner({ gameResult, guesses, answer }) {
    return (
        <div
            className={`banner ${
                gameResult === GAME_RESULT.WON ? "happy" : "sad"
            }`}
        >
            {gameResult === GAME_RESULT.WON ? (
                <p>
                    <strong>Congratulations!</strong> Got it in{" "}
                    <strong>{guesses.length} guesses</strong>.
                </p>
            ) : (
                <p>
                    Sorry, the correct answer is <strong>{answer}</strong>.
                </p>
            )}
        </div>
    );
}

export default Banner;
