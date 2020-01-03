import React from "react";
import classes from "./Starwarsinput.module.css";

const Starwarsinput = props => {
  return <input {...props} className={classes.input} />;
};

export default Starwarsinput;
