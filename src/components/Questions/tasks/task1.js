import React, { useContext } from "react";
import classes from "./tasks.module.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import authContext from "../../../states/store";
import { BACKEND_URL } from "../../../constants";
const TASK1Query = gql`
  {
    longestOpeningCredits
  }
`;

const Task1 = props => {
  const { loading, error, data } = useQuery(TASK1Query);
  const [state, dispatch] = useContext(authContext);
  const refreshToken = () => {
    fetch(`${BACKEND_URL}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        refreshToken: state.refreshToken
      })
    })
      .then(response => response.json())
      .then(value => {
        if (value.error) {
          dispatch({ type: "LOGOUT" });
        } else {
          dispatch({ type: "UPDATE", accessToken: value.accessToken });
        }
      })
      .catch(err => {
        dispatch({ type: "LOGOUT" });
      });
  };
  return (
    <div className={classes.container}>
      <p className={classes.question}>
        Which of all Star Wars movies has the longest opening crawl?
      </p>
      {loading && <p className={classes.answer}>Loading ...</p>}
      {error && <p className={classes.bad}>error ...{refreshToken()}</p>}
      {data && <p className={classes.answer}>{data.longestOpeningCredits}</p>}
    </div>
  );
};

export default Task1;
