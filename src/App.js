import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Reset from "./styles/reset";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router>
        <Menu />
        <Routes />
        <Footer>
          created by{" "}
          <a
            href="https://www.linkedin.com/in/diazevedo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Diazevedo
          </a>{" "}
          -{" "}
          <a
            href="https://devchallenges.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            @devChallenges.io
          </a>
        </Footer>
      </Router>
    </>
  );
}

export default App;
