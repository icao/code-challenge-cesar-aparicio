import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.scss";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <h2>Error 404 - Not Found</h2>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
