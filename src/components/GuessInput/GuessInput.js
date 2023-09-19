import React from "react";

function GuessInput() {
    const [wordInput, setWordInput] = React.useState("");

    const handleSumbitWord = (event) => {
        event.preventDefault();
        console.log({ guess: wordInput });
        setWordInput("");
    };

    return (
        <form className="guess-input-wrapper" onSubmit={handleSumbitWord}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={wordInput}
                pattern="[A-Z]{5}"
                onChange={(event) => {
                    return setWordInput(event.target.value.toUpperCase());
                }}
            />
        </form>
    );
}

export default GuessInput;
