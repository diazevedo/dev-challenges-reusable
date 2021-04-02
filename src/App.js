import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
      </Router>
    </>
  );
}

export default App;
