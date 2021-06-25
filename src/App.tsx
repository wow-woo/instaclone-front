import { useReactiveVar } from "@apollo/client";
import { setLogin, setMode } from "./apolloClient";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { NotFound } from "./screens/NotFound";
import { ThemeProvider } from "styled-components";
import { darkMode, GlobalStyles, lightMode } from "./styles";

function App() {
  const loggedIn = useReactiveVar(setLogin);
  const colorMode = useReactiveVar(setMode);

  return (
    <ThemeProvider theme={colorMode ? darkMode : lightMode}>
      <GlobalStyles />

      <Router>
        <Switch>
          <Route path='/' exact>
            {loggedIn ? <Home /> : <Login />}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
