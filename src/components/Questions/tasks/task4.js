import React, { useContext } from "react";
import classes from "./tasks.module.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import authContext from "../../../states/store";
import { BACKEND_URL } from "../../../constants";
const TASK4Query = gql`
  {
    MostPlanetHasPilots {
      name
      value {
        total
        people {
          name
          species
        }
      }
    }
  }
`;

const Task4 = props => {
  const { loading, error, data } = useQuery(TASK4Query);
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
        What planet in Star Wars universe provided largest number of vehicle
        pilots?
      </p>
      {loading && <p className={classes.answer}>Loading ...</p>}
      {error && <p className={classes.bad}>error ...{refreshToken()}</p>}
      {data &&
        data.MostPlanetHasPilots.map(planet => (
          <p className={classes.answer}>
            Planet: {planet.name} - Pilots: ({planet.value.total}){" "}
            {planet.value.people
              .map(p => `${p.name} - ${p.species || "unknown"}`)
              .join(", ")}
          </p>
        )).slice(0, 5)}
    </div>
  );
};

export default Task4;
