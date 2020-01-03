import React, { forwardRef } from "react";
import classes from "./Starwarsinput.module.css";

const Starwarsinput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={classes.input} />;
});

export default Starwarsinput;
