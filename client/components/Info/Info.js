import React from "react";
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div>
      <div className="info-vocabulary-container">
        <p className="info-vocabulary-heading">Lifting Vocabulary</p>
        <div className="info-single-vocab">
          <p className="info-word">Sets</p>
          <p className="info-definition">
            A group of repetitions - how many times you will repeat a particular
            number of repetitions (reps) of an exercise.
          </p>
        </div>
        <div className="info-single-vocab">
          <p className="info-word">Reps</p>
          <p className="info-definition">
            How many times you will repeat an exercise.
          </p>
        </div>
      </div>
      <div className="info-example-container">
        <p className="info-example-heading">Example</p>
        <p className="info-example">3 sets of 10 reps</p>
        <p className="info-example">3 x 10</p>
        <p className="info-example-explained">
          This means you are doing to do an exercise 10 times (10 reps), take a
          break, and then do another 10 reps.
        </p>
        <p className="info-example-explained">
          Each time you finish 10 reps, you've finished a set!
        </p>
        <p className="info-example-explained">
          In this example, you will have done an exercise 30 times.
        </p>
      </div>
      <div className="info-contact">
        <p className="info-contact-heading">
          Still need help or have a suggestion?
        </p>
        <div className="info-btns">
          <Link to="/contact" className="info-contact-link">
            <button className="info-contact-btn">Contact us!</button>
          </Link>
          <Link
            target="_blank"
            to={"https://github.com/mscherryxu/lift-the-world"}
          >
            <button className="info-source-code">{`</> Source Code`}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
