import React, { useReducer } from "react";
import classes from "./App.module.css";
import logo from "./logo.png";
import Questions from "./components/Questions";
import Login from "./components/Login";
import { Provider } from "./states/store";
import { authReducer, initialAuthState } from "./states/reducer";

function App() {
  const useAuthState = useReducer(authReducer, initialAuthState);

  return (
    <Provider value={useAuthState}>
      <div className={classes.App}>
        {useAuthState[0].accessToken && (
          <button
            onClick={() => useAuthState[1]({ type: "LOGOUT" })}
            className={classes.logoutbtn}
          >
            Logout
          </button>
        )}
        <img src={logo} alt="Star wars logo" className={classes.logo} />
        {useAuthState[0].accessToken ? <Questions /> : <Login />}
      </div>
    </Provider>
  );
}

export default App;
