import React from "react";

import classes from "./Message.module.css";
const Message = props => {
  return (
    <div className={[classes.container, classes[props.type]].join(" ")}>
      {props.children}
    </div>
  );
};

export default Message;
