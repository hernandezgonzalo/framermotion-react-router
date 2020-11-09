import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Pages
import Home from "./pages/home";
import Model from "./pages/model";
//components
import Header from "./components/header";
//Styles
import "./App.scss";

function App() {
  const location = useLocation();

  const imageDetails = {
    width: 524,
    height: 650
  };

  return (
    <>
      <Header />
      <AnimatePresence /*initial={false}*/ exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
