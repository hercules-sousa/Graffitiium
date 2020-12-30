import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./screens/Landing";
import About from "./screens/About";
import SignUp from "./screens/SignUp";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/sign-up" component={SignUp} />
    </BrowserRouter>
  );
}

export default Routes;