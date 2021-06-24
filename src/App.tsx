import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { NotFound } from "./screens/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          {loggedIn ? (
            <Home setLoggedIn={setLoggedIn} />
          ) : (
            <Login setLoggedIn={setLoggedIn} />
          )}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
