import React from "react";
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";

const App = () => {
  return (
    <>
      <Router>
          <Sidebar/>
          <Switch>
              <Route exact path="/addNotes" component={Notes}/>
              <Route exact path="/scratchPad" component={Notes}/>
              <Route exact path="/notes" component={Notes}/>
              <Route exact path="/favourites" component={Notes}/>
              <Route exact path="/trash" component={Notes}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
