import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { Client, setLogin, setMode } from "./apolloClient";
import React, { useState } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { NotFound } from "./screens/NotFound";

import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { darkMode, GlobalStyles, lightMode } from "./styles";
import routes from "./consts/routes";

function App() {
  const loggedIn = useReactiveVar(setLogin);
  const colorMode = useReactiveVar(setMode);

  return (
    <ApolloProvider client={Client}>
      <HelmetProvider>
        <ThemeProvider theme={colorMode ? darkMode : lightMode}>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route path='/' exact component={loggedIn ? Home : Login}></Route>
              <Route path={routes.signup} exact>
                {loggedIn ? <Redirect to='/notice' /> : <Signup />}
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
