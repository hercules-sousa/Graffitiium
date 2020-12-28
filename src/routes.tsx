import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./screens/Landing";
import About from "./screens/About";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default Routes;