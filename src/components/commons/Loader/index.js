import React from "react";

import classes from "./Loader.module.css";
const Loader = props => {
  let containerClasses = classes.container;
  if (!props.show) {
    containerClasses = [classes.container, classes.hide].join(" ");
  }
  return <div className={containerClasses}>Loading ... </div>;
};

export default Loader;
