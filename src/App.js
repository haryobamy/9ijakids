import React from "react";
import { Footer, Games } from "./components";
import { data } from "./Data";
import { GlobalStyles } from "./globalStyle";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Games data={data} heading="Choose Your Favorite Game" />
        <Footer />
      </Router>
    </>
  );
};

export default App;
