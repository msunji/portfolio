import React, { Fragment } from "react";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          <div className="container">
            <Nav />
            <Switch>
              <Route exact path="/">
                <Intro />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
