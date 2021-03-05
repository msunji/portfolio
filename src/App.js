import React, { Fragment } from "react";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
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
            <Header />
            <Switch>
              <Route exact path="/">
                <Intro />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
