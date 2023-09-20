import React from "react";

import { KEYBOARD_KEYS } from "../../constants";
import { checkKeyboardGuesses } from "../../game-helpers";

function GuessKeyboard({ guesses }) {
    const checkedGuesses = checkKeyboardGuesses(guesses);

    const checkedKeyboardKeys = KEYBOARD_KEYS.map((row) => {
        return row.map((key) => {
            const findedLetter = checkedGuesses.find(
                ([letter, _]) => letter === key
            );
            return {
                key: findedLetter != null ? findedLetter[0] : key,
                className: findedLetter != null ? findedLetter[1] : undefined,
            };
        });
    });

    return (
        <div className="guess-keyboard-wrapper">
            {checkedKeyboardKeys.map((row, index) => {
                return (
                    <div
                        key={`keyboard-row-${index}`}
                        className="guess-keyboard-row"
                    >
                        {row.map((letter) => {
                            return (
                                <button
                                    key={`keyboard-key-${letter.key}`}
                                    type="button"
                                    className={`guess-keyboard-key ${letter.className}`}
                                >
                                    {letter.key}
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default GuessKeyboard;
