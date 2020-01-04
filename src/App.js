import React, { useReducer } from "react";
import classes from "./App.module.css";
import logo from "./logo.png";
import Questions from "./components/Questions";
import Login from "./components/Login";
import { Provider } from "./states/store";
import { authReducer, initialAuthState } from "./states/reducer";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BACKEND_URL } from "./constants";

function App() {
  const useAuthState = useReducer(authReducer, initialAuthState);
  const client = new ApolloClient({
    uri: `${BACKEND_URL}/graphql`,
    headers: {
      authorization: `Bearer  ${useAuthState[0].accessToken}`
    }
  });
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
        {useAuthState[0].accessToken ? (
          <ApolloProvider client={client}>
            <Questions />
          </ApolloProvider>
        ) : (
          <Login />
        )}
      </div>
    </Provider>
  );
}

export default App;
