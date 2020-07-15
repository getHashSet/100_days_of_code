import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

function App() {
  return (
    <React.Fragment>
      <Switch>
        {/* ============= */}
        {/*   Home Page   */}
        {/* ============= */}
        <Route exact path="/" render={() => <Home />} />

        {/* ============ */}
        {/*   404 Page   */}
        {/* ============ */}
        <Route render={() => <Error title="404 Error" />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
