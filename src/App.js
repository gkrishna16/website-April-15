import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import AfterHome from "./components/AfterHome";
import { Route, Switch } from "react-router-dom";

// PAGES
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </>
  );
}

export default App;
