import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import MovieView from "./pages/movie";
import TvView from "./pages/tv";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/movie/:id">
          <MovieView />
        </Route>
        <Route path="/tv/:id">
          <TvView />
        </Route>
      </Router>
    </>
  );
}

export default App;
