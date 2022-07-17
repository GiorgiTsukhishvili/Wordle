import React, { Fragment } from "react";
import { useState } from "react";
import "./Rules.css";

function Rules() {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <div className="rules" onClick={() => setToggle(!toggle)}>
        <h1 className="rules-header">?</h1>
        <p className="rules-paragraphs">Game Rules</p>
      </div>
      {toggle && (
        <div className="rules-hidden">
          <h1 className="rules-hidden-header">Game Rules</h1>
          <p className="rules-hidden-paragraph">
            You have to guess the Wordle in six goes or less.
          </p>
          <p className="rules-hidden-paragraph">
            Every word you enter must be in the word list.
          </p>
          <p className="rules-hidden-paragraph">
            A correct letter turns green.
          </p>
          <p className="rules-hidden-paragraph">
            A correct letter in the wrong place turns yellow.
          </p>
          <p className="rules-hidden-paragraph">
            An incorrect letter turns gray.
          </p>
          <p className="rules-hidden-paragraph">
            Letters can be used more than once.
          </p>
          <button
            onClick={() => setToggle(!toggle)}
            className="hidden-rules-batton"
          >
            X
          </button>
        </div>
      )}

      {toggle && (
        <div className="overlay" onClick={() => setToggle(!toggle)}></div>
      )}
    </Fragment>
  );
}

export default Rules;
