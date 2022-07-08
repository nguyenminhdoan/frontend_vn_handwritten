import React from "react";

import Header from "./containers/Header/Header";
import About from "./containers/About/About";
import HowItWorks from "./containers/HowItWorks/HowItWorks";
import Ocr from "./containers/Ocr/Ocr";
import Footer from "./containers/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Adaptive from "./containers/adaptiveLearning/Adaptive";

const App = () => {
  return (
    // <React.Fragment>
    <Router>
      <Switch>
        <>
          <Route exact path="/">
            <Header />
            <Ocr />
            <Footer />
          </Route>
          <Route exact path="/adaptive">
            <Adaptive />
          </Route>

          {/* <HowItWorks /> */}
          {/* <About /> */}
        </>
      </Switch>
    </Router>
  );
};

export default App;
