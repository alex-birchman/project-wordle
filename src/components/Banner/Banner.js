import React from "react";

import { GAME_STATUS } from "../../constants";

function Banner({ gameStatus, userGuessesCount, answer, handleRestartGame }) {
    return (
        <div
            className={`banner ${
                gameStatus === GAME_STATUS.WON ? "happy" : "sad"
            }`}
        >
            {gameStatus === GAME_STATUS.WON ? (
                <p>
                    <strong>Congratulations!</strong> Got it in{" "}
                    <strong>{userGuessesCount} guesses</strong>.
                </p>
            ) : (
                <p>
                    Sorry, the correct answer is <strong>{answer}</strong>.
                </p>
            )}
            <button onClick={handleRestartGame}>Restart Game</button>
        </div>
    );
}

export default Banner;
