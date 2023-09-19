import React from "react";

function GuessInput({ handleAddGuess, disabled = false }) {
    const [wordInput, setWordInput] = React.useState("");

    const handleSumbitWord = (event) => {
        event.preventDefault();
        handleAddGuess({
            id: crypto.randomUUID(),
            word: wordInput,
        });
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
                pattern="[A-Z]{1,5}"
                onChange={(event) => {
                    return setWordInput(event.target.value.toUpperCase());
                }}
            />
        </form>
    );
}

export default GuessInput;
