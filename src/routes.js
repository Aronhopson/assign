import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./Main";
import Detail from "./Details";
import Dash from "./dash";

export default function Routes() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route path="/ma" component={Main} />
          <Route path="/det" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
