import React, { useState } from "react";

import classes from "./Starwarsbutton.module.css";

const StarwarsButton = props => {
  const { onClick, isOn, toggle } = props;
  const [clicked, setClicked] = useState(toggle ? isOn : false);

  const clickable = () => {
    if (toggle) {
      setClicked(!clicked);
    } else {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 200);
    }
    onClick();
  };
  return (
    <div style={props.style} className={classes.container} onClick={clickable}>
      <div
        className={
          clicked ? [classes.active, classes.clicked].join(" ") : classes.active
        }
      >
        <span className={classes.star}>&#9733;</span> {props.children}
        <span className={classes.star}>&#9733;</span>
      </div>
      <div className={classes.shadow}></div>
    </div>
  );
};

export default StarwarsButton;
