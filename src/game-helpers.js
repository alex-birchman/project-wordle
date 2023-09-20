/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

import { range } from "./utils";
import { LETTER_STATUS } from "./constants";

export function checkGuess(guess, answer) {
    // This constant is a placeholder that indicates we've successfully
    // dealt with this character (it's correct, or misplaced).
    const SOLVED_CHAR = "✓";

    if (!guess) {
        return null;
    }

    const guessChars = guess.toUpperCase().split("");
    const answerChars = answer.split("");

    const result = [];

    // Step 1: Look for correct letters.
    for (let i = 0; i < guessChars.length; i++) {
        if (guessChars[i] === answerChars[i]) {
            result[i] = {
                letter: guessChars[i],
                status: LETTER_STATUS.CORRECT,
            };
            answerChars[i] = SOLVED_CHAR;
            guessChars[i] = SOLVED_CHAR;
        }
    }

    // Step 2: look for misplaced letters. If it's not misplaced,
    // it must be incorrect.
    for (let i = 0; i < guessChars.length; i++) {
        if (guessChars[i] === SOLVED_CHAR) {
            continue;
        }

        let status = LETTER_STATUS.INCORRECT;
        const misplacedIndex = answerChars.findIndex(
            (char) => char === guessChars[i]
        );
        if (misplacedIndex >= 0) {
            status = LETTER_STATUS.MISPLACED;
            answerChars[misplacedIndex] = SOLVED_CHAR;
        }

        result[i] = {
            letter: guessChars[i],
            status,
        };
    }

    return result;
}

export function checkKeyboardGuesses(guesses) {
    let letterGuesses = {};

    const flattenGuesses = guesses.reduce((acc, guess) => {
        return [...acc, ...guess.word];
    }, []);

    for (let i = 0; i < flattenGuesses.length; i++) {
        const { letter, status } = flattenGuesses[i];
        const existedLetters = Object.keys(letterGuesses);

        if (
            existedLetters.includes(letter) &&
            status === LETTER_STATUS.CORRECT
        ) {
            letterGuesses[letter] = status;
        }

        if (!existedLetters.includes(letter)) {
            letterGuesses[letter] = status;
        }
    }

    const result = Object.entries(letterGuesses);

    return result;
}

export function makeGameGrid(rows, columns) {
    return range(0, rows).map(() => ({
        id: crypto.randomUUID(),
        word: range(0, columns).map(() => ({
            id: crypto.randomUUID(),
            letter: undefined,
            status: undefined,
        })),
    }));
}
