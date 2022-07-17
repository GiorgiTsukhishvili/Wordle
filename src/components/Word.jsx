import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Word.css";

const WORD_LETTERS = 5;

function Word({ item, isFinal, answer }) {
  const tile = [];

  for (let i = 0; i < WORD_LETTERS; i++) {
    const letter = item[i];

    let className = "word-letter";
    // console.log(isFinal);
    if (isFinal) {
      if (letter === answer[i]) {
        className += " correct";
      } else if (answer.includes(letter)) {
        className += " includes";
      } else if (item.length !== 0) {
        className += " incorrect";
      }
    }

    tile.push(
      <div key={uuidv4()} className={className}>
        {letter}
      </div>
    );
  }

  return (
    <div className="word-line">
      {tile.map((letter) => {
        return letter;
      })}
    </div>
  );
}

export default Word;
