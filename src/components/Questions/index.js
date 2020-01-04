import React, { useState } from "react";
import classes from "./questions.module.css";
import StarwarsButton from "../commons/Starwarsbutton";
import Tasks from "./tasks";

const Questions = props => {
  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <div className={classes.container}>
      <StarwarsButton
        style={{ width: "30%" }}
        toggle
        isOn={showQuestions}
        onClick={() => setShowQuestions(!showQuestions)}
      >
        Do. Or do not. There is no try.
      </StarwarsButton>
      {showQuestions && <Tasks />}
    </div>
  );
};

export default Questions;
