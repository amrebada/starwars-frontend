import React, { useState } from "react";
import classes from "./questions.module.css";
import StarwarsButton from "../commons/Starwarsbutton";

const Questions = props => {
  const [showQuestions, setShowQuestions] = useState(false);
  console.log(showQuestions);

  return (
    <div className={classes.container}>
      <StarwarsButton
        toggle
        isOn={showQuestions}
        onClick={() => setShowQuestions(!showQuestions)}
      >
        Do. Or do not. There is no try.
      </StarwarsButton>
    </div>
  );
};

export default Questions;
