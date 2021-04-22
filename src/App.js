import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import AfterHome from "./components/AfterHome";
import { Route, Switch, useLocation } from "react-router-dom";

// Animation
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimation } from "./components/animation";

// PAGES
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </>
  );
}

export default App;
