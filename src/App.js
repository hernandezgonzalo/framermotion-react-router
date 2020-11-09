import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Model from "./pages/model";
import Header from "./components/header";
import "./App.scss";

function App() {
  const location = useLocation();

  const imageDetails = {
    width: 500,
    height: 500
  };

  return (
    <>
      <Header />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home imageDetails={imageDetails} />
          </Route>
          <Route exact path="/model/:id">
            <Model imageDetails={imageDetails} />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
