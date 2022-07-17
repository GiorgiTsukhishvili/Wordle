import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { words } from "../words/words";
import Word from "./Word";

function SetWords() {
  const [answer, setAnswer] = useState("");
  const [guess, setGuess] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleType = (e) => {
      if (gameOver) return;

      if (e.key === "Enter") {
        if (currentGuess.length !== 5 || e.key === " ") {
          return;
        }

        const newGuess = [...guess];
        newGuess[guess.findIndex((val) => val == null)] = currentGuess;

        setGuess(newGuess);
        setCurrentGuess("");

        const correctAnswer = answer === currentGuess;

        if (correctAnswer) setGameOver(true);
      }

      if (e.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }

      if (currentGuess.length >= 5) return;

      setCurrentGuess(currentGuess + e.key);
    };

    window.addEventListener("keydown", handleType);

    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess]);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setAnswer(randomWord.toLowerCase());
  }, []);

  return (
    <div>
      {guess.map((item, i) => {
        const isCurrentGuess = i === guess.findIndex((val) => val == null);

        return (
          <Word
            key={uuidv4()}
            item={isCurrentGuess ? currentGuess : item ? item : ""}
            isFinal={!currentGuess && answer != null}
            answer={answer}
          />
        );
      })}
    </div>
  );
}

export default SetWords;
