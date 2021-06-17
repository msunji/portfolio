import React, { Fragment } from "react";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Notes from "./projects/Notes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Intro />
            </Route>
            <Route exact path="/projects/notes">
              <Notes />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
