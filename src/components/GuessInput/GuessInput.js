import React from "react";

import { NUM_OF_LETTERS_ALLOWED } from "../../constants";

function GuessInput({ handleAddGuess, disabled = false }) {
    const [wordInput, setWordInput] = React.useState("");

    const handleSumbitWord = (event) => {
        event.preventDefault();
        handleAddGuess(wordInput);
        setWordInput("");
    };

    return (
        <form className="guess-input-wrapper" onSubmit={handleSumbitWord}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                disabled={disabled}
                id="guess-input"
                type="text"
                value={wordInput}
                pattern={`[A-Z]{${NUM_OF_LETTERS_ALLOWED}}`}
                onChange={(event) => {
                    return setWordInput(event.target.value.toUpperCase());
                }}
            />
        </form>
    );
}

export default GuessInput;
